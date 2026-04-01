#include "auth.h"
#include <algorithm>
#include <ctime>
#include <fstream>
#include <sstream>

namespace temanbelanja {

std::string normalizeEmail(const std::string& email) {
    std::string result;
    for (char c : email) {
        result.push_back(static_cast<char>(std::tolower(static_cast<unsigned char>(c))));
    }
    return result;
}

bool loadUsers(std::map<std::string, User>& users) {
    std::ifstream file(USERS_DB_FILE);
    if (!file.is_open()) {
        return true;
    }

    std::string line;
    while (std::getline(file, line)) {
        if (line.empty()) continue;
        std::stringstream ss(line);
        std::string email, name, password, createdAt;
        if (std::getline(ss, email, '\t') && std::getline(ss, name, '\t') &&
            std::getline(ss, password, '\t') && std::getline(ss, createdAt, '\t')) {
            users[email] = User{name, email, password, createdAt};
        }
    }
    return true;
}

bool saveUsers(const std::map<std::string, User>& users) {
    std::ofstream file(USERS_DB_FILE, std::ios::trunc);
    if (!file.is_open()) {
        return false;
    }
    for (auto const& [email, user] : users) {
        file << email << '\t' << user.name << '\t' << user.password << '\t' << user.createdAt << '\n';
    }
    return true;
}

static std::string nowIso() {
    std::time_t t = std::time(nullptr);
    std::tm localTm;
#if defined(_WIN32)
    localtime_s(&localTm, &t);
#else
    localtime_r(&t, &localTm);
#endif
    char buf[32];
    std::strftime(buf, sizeof(buf), "%Y-%m-%dT%H:%M:%S", &localTm);
    return std::string(buf);
}

AuthResult registerUser(const std::string& name, const std::string& emailParam, const std::string& password) {
    AuthResult ret{false, "", ""};

    std::string email = normalizeEmail(emailParam);
    if (name.empty() || email.empty() || password.empty()) {
        ret.message = "Nama, email, dan kata sandi wajib diisi.";
        return ret;
    }
    if (password.size() < 6) {
        ret.message = "Kata sandi minimal 6 karakter.";
        return ret;
    }

    std::map<std::string, User> users;
    if (!loadUsers(users)) {
        ret.message = "Tidak dapat membuka database user.";
        return ret;
    }

    if (users.count(email) > 0) {
        ret.message = "Email sudah terdaftar.";
        return ret;
    }

    users[email] = User{name, email, password, nowIso()};
    if (!saveUsers(users)) {
        ret.message = "Gagal menyimpan data user ke database.";
        return ret;
    }

    ret.success = true;
    ret.message = "Pendaftaran sukses.";
    ret.name = name;
    return ret;
}

AuthResult loginUser(const std::string& emailParam, const std::string& password) {
    AuthResult ret{false, "", ""};
    std::string email = normalizeEmail(emailParam);

    if (email.empty() || password.empty()) {
        ret.message = "Email dan kata sandi wajib diisi.";
        return ret;
    }
    std::map<std::string, User> users;
    if (!loadUsers(users)) {
        ret.message = "Tidak dapat membuka database user.";
        return ret;
    }

    if (!users.count(email)) {
        ret.message = "Akun tidak ditemukan.";
        return ret;
    }

    if (users[email].password != password) {
        ret.message = "Kata sandi salah.";
        return ret;
    }

    ret.success = true;
    ret.message = "Login berhasil.";
    ret.name = users[email].name;
    return ret;
}

} // namespace temanbelanja
