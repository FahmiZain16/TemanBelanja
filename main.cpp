#include <iostream>
#include <direct.h>
#include <map>
#include <sstream>
#include <string>
#include "webui.h"
#include "auth.h"

static std::string getCookieValue(const std::string& cookies, const std::string& key) {
    std::istringstream stream(cookies);
    std::string part;
    while (std::getline(stream, part, ';')) {
        size_t sep = part.find('=');
        if (sep == std::string::npos) continue;
        std::string n = part.substr(0, sep);
        std::string v = part.substr(sep + 1);
        // trim spaces
        while (!n.empty() && std::isspace((unsigned char)n.front())) n.erase(n.begin());
        while (!n.empty() && std::isspace((unsigned char)n.back())) n.pop_back();
        while (!v.empty() && std::isspace((unsigned char)v.front())) v.erase(v.begin());
        while (!v.empty() && std::isspace((unsigned char)v.back())) v.pop_back();
        if (n == key) {
            return v;
        }
    }
    return "";
}

static std::string decodeURIComponent(const std::string& s) {
    std::string out;
    out.reserve(s.size());
    for (size_t i = 0; i < s.size(); ++i) {
        if (s[i] == '%' && i + 2 < s.size()) {
            char hex[3] = {s[i + 1], s[i + 2], '\0'};
            out.push_back(static_cast<char>(std::strtol(hex, nullptr, 16)));
            i += 2;
        } else if (s[i] == '+') {
            out.push_back(' ');
        } else {
            out.push_back(s[i]);
        }
    }
    return out;
}

void handle_auth(webui_event_t* e) {
    std::string cookies = e->cookies ? e->cookies : "";
    std::string action = getCookieValue(cookies, "auth_action");
    std::string email = decodeURIComponent(getCookieValue(cookies, "auth_email"));
    std::string password = decodeURIComponent(getCookieValue(cookies, "auth_password"));
    std::string name = decodeURIComponent(getCookieValue(cookies, "auth_name"));

    temanbelanja::AuthResult result;

    if (action == "register") {
        result = temanbelanja::registerUser(name, email, password);
    } else if (action == "login") {
        result = temanbelanja::loginUser(email, password);
    } else {
        result.success = false;
        result.message = "Aksi otentikasi tidak dikenali.";
    }

    auto escapeJsString = [&](const std::string& text) {
        std::string escaped;
        escaped.reserve(text.size());
        for (char c : text) {
            switch (c) {
                case '\\': escaped += "\\\\"; break;
                case '\'': escaped += "\\\'"; break;
                case '"': escaped += "\\\""; break;
                case '\n': escaped += "\\n"; break;
                case '\r': escaped += "\\r"; break;
                case '\t': escaped += "\\t"; break;
                default: escaped.push_back(c); break;
            }
        }
        return escaped;
    };

    if (result.success) {
        // Set session cookie and local storage value via JS then show dashboard.
        std::ostringstream js;
        js << "document.cookie = 'teman_belanja_current_user=" << email << ";path=/';";
        js << "localStorage.setItem('teman_belanja_current_user', '" << email << "');";
        webui_run_client(e, js.str().c_str());
        std::cout << "[handle_auth] login success for " << email << ", opening dashboard" << std::endl;
        webui_show(e->window, "dashboard.html");
        return;
    } else {
        std::ostringstream js;
        js << "handleAuthResponse(" << (result.success ? "true" : "false") << ", '";
        js << escapeJsString(result.message);
        js << "', '";
        js << escapeJsString(result.name);
        js << "');";

        webui_run_client(e, js.str().c_str());
    }
}

void handle_logout(webui_event_t* e) {
    // Clear session cookie and show login.
    std::string js = "document.cookie = 'teman_belanja_current_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';";
    webui_run_client(e, js.c_str());
    webui_show(e->window, "login.html");
}

void handle_back_to_login(webui_event_t* e) {
    webui_show(e->window, "login.html");
}

void handle_show_dashboard(webui_event_t* e) {
    webui_show(e->window, "dashboard.html");
}

void handle_daftar(webui_event_t* e) {
    std::cout << "Daftar Belanja diklik!" << std::endl;
    webui_run(e->window, "alert('Membuka Daftar Belanja...');");
}

void handle_inventaris(webui_event_t* e) {
    std::cout << "Inventaris diklik!" << std::endl;
}

void handle_keuangan(webui_event_t* e) {
    std::cout << "Hitung Keuangan diklik!" << std::endl;
}

int main() {
    size_t window = webui_new_window();

    // Optional: enable internal webui debug logs
    webui_set_logger(
        [](size_t level, const char* log, void* user_data) {
            (void)user_data;
            std::cout << "[WebUI] level=" << level << " msg=" << (log ? log : "") << std::endl;
        },
        nullptr);

    webui_bind(window, "handle_auth", handle_auth);
    webui_bind(window, "handle_logout", handle_logout);
    webui_bind(window, "handle_back_to_login", handle_back_to_login);
    webui_bind(window, "handle_show_dashboard", handle_show_dashboard);
    webui_bind(window, "handle_daftar", handle_daftar);
    webui_bind(window, "handle_inventaris", handle_inventaris);
    webui_bind(window, "handle_keuangan", handle_keuangan);

    webui_set_config(use_cookies, false); // allow direct local path load without cookie restrictions
    webui_show(window, "login.html");

    // Keep app running until all windows are closed
    webui_wait();

    // Clean up WebUI resources
    webui_clean();
    return 0;
}
