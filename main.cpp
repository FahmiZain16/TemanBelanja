#include <iostream>
#include "webui.h"

void handle_daftar(webui_event_t* e) {
    std::cout << "Daftar diklik" << std::endl;
}

int main() {

    size_t window = webui_new_window();

    webui_set_root_folder(window, ".");

    webui_bind(window, "handle_daftar", handle_daftar);

    const char* url = webui_start_server(window, "login.html");

    webui_open_url(url);

    webui_wait();
    webui_clean();

    return 0;
}