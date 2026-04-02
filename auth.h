#ifndef TEMAN_BELANJA_AUTH_H
#define TEMAN_BELANJA_AUTH_H

#include <map>
#include <string>

namespace temanbelanja {

struct User {
    std::string name;
    std::string email;
    std::string password;
    std::string createdAt;
};

struct AuthResult {
    bool success;
    std::string message;
    std::string name; // name of user if available
};

const char* const USERS_DB_FILE = "users.db";

std::string normalizeEmail(const std::string& email);
bool loadUsers(std::map<std::string, User>& users);
bool saveUsers(const std::map<std::string, User>& users);
AuthResult registerUser(const std::string& name, const std::string& email, const std::string& password);
AuthResult loginUser(const std::string& email, const std::string& password);

} // namespace temanbelanja

#endif // TEMAN_BELANJA_AUTH_H