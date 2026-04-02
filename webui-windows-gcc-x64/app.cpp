#include "webui.hpp"
#include <iostream>
#include <fstream>
#include <sstream>
#include <map>
#include <vector>
#include <ctime>
#include <algorithm>
#include <cstring>
#include <thread>
#include <chrono>

// Simple JSON-like structure (instead of using external JSON library)
struct User {
    std::string id;
    std::string name;
    std::string email;
    std::string password;
};

struct Item {
    std::string id;
    std::string name;
    double price;
    int quantity;
    std::string category;
    std::string expiryDate;
    bool checked;
};

struct ShoppingList {
    std::string id;
    std::string name;
    std::vector<Item> items;
    std::string createdAt;
};

struct Inventory {
    std::string id;
    std::string name;
    std::vector<Item> items;
    std::string createdAt;
};

struct Financial {
    std::string id;
    std::string description;
    double amount;
    std::string type; // income or expense
    std::string date;
    std::string category;
};

// Global data storage
std::vector<User> users;
std::vector<ShoppingList> shoppingLists;
std::vector<Inventory> inventories;
std::vector<Financial> financials;
User currentUser{"", "", "", ""};

// Utility functions
std::string generateId() {
    return std::to_string(std::time(nullptr)) + "_" + std::to_string(rand());
}

std::string getCurrentDateTime() {
    time_t now = std::time(nullptr);
    char buf[100];
    std::strftime(buf, sizeof(buf), "%Y-%m-%dT%H:%M:%S", std::localtime(&now));
    return buf;
}

// User functions
void initializeDefaultUsers() {
    // Add sample user
    users.push_back({"1", "Budi Santoso", "budi@example.com", "password123"});
    users.push_back({"2", "Siti Nurhaliza", "siti@example.com", "password456"});
}

bool authenticateUser(const std::string& email, const std::string& password) {
    // Strict validation: email and password must match exactly
    if (email.empty() || password.empty()) {
        return false;
    }
    
    for (auto& user : users) {
        if (user.email == email && user.password == password) {
            currentUser = user;
            return true;
        }
    }
    return false;
}

bool registerUser(const std::string& name, const std::string& email, const std::string& password) {
    // Check if email already exists
    for (auto& user : users) {
        if (user.email == email) {
            return false;
        }
    }
    
    User newUser;
    newUser.id = generateId();
    newUser.name = name;
    newUser.email = email;
    newUser.password = password;
    
    users.push_back(newUser);
    return true;
}

// Shopping List functions
ShoppingList* findShoppingList(const std::string& id) {
    for (auto& list : shoppingLists) {
        if (list.id == id) {
            return &list;
        }
    }
    return nullptr;
}

// Inventory functions
Inventory* findInventory(const std::string& id) {
    for (auto& inv : inventories) {
        if (inv.id == id) {
            return &inv;
        }
    }
    return nullptr;
}

// WebUI callback functions
void handleLogin(webui::window::event* e) {
    try {
        std::string data = e->get_string();
        size_t delimiter = data.find("|");
        
        if (delimiter != std::string::npos && delimiter > 0 && delimiter < data.length() - 1) {
            std::string emailStr = data.substr(0, delimiter);
            std::string passwordStr = data.substr(delimiter + 1);
            
            // Trim whitespace
            emailStr.erase(emailStr.find_last_not_of(" \n\r\t") + 1);
            passwordStr.erase(passwordStr.find_last_not_of(" \n\r\t") + 1);
            
            if (authenticateUser(emailStr, passwordStr)) {
                e->return_string("success|" + currentUser.name + "|" + currentUser.id);
            } else {
                e->return_string("error|Email atau password salah");
            }
        } else {
            e->return_string("error|Format data salah");
        }
    }
    catch (const std::exception& ex) {
        std::cerr << "Error in handleLogin: " << ex.what() << std::endl;
        e->return_string("error|Server error");
    }
}

void handleSignUp(webui::window::event* e) {
    try {
        std::string data = e->get_string();
        size_t first = data.find("|");
        size_t second = data.find("|", first + 1);
        
        if (first != std::string::npos && second != std::string::npos) {
            std::string name = data.substr(0, first);
            std::string email = data.substr(first + 1, second - first - 1);
            std::string password = data.substr(second + 1);
            
            if (registerUser(name, email, password)) {
                e->return_string("success|Akun berhasil dibuat");
            } else {
                e->return_string("error|Email sudah terdaftar");
            }
        } else {
            e->return_string("error|Format data salah");
        }
    }
    catch (const std::exception& ex) {
        std::cerr << "Error in handleSignUp: " << ex.what() << std::endl;
        e->return_string("error|Server error");
    }
}

void handleCreateShoppingList(webui::window::event* e) {
    try {
        std::string name = e->get_string();
        ShoppingList list;
        list.id = generateId();
        list.name = name;
        list.createdAt = getCurrentDateTime();
        shoppingLists.push_back(list);
        
        e->return_string("success|" + list.id);
    }
    catch (const std::exception& ex) {
        std::cerr << "Error in handleCreateShoppingList: " << ex.what() << std::endl;
        e->return_string("error|Server error");
    }
}

void handleAddItemToShoppingList(webui::window::event* e) {
    try {
        std::string data = e->get_string();
        size_t firstDelim = data.find("|");
        size_t secondDelim = data.find("|", firstDelim + 1);
        size_t thirdDelim = data.find("|", secondDelim + 1);
        size_t fourthDelim = data.find("|", thirdDelim + 1);
        
        if (firstDelim != std::string::npos && secondDelim != std::string::npos) {
            std::string listId = data.substr(0, firstDelim);
            std::string itemName = data.substr(firstDelim + 1, secondDelim - firstDelim - 1);
            double price = std::stod(data.substr(secondDelim + 1, thirdDelim - secondDelim - 1));
            int quantity = std::stoi(data.substr(thirdDelim + 1, fourthDelim - thirdDelim - 1));
            
            ShoppingList* list = findShoppingList(listId);
            if (list) {
                Item item;
                item.id = generateId();
                item.name = itemName;
                item.price = price;
                item.quantity = quantity;
                item.checked = false;
                list->items.push_back(item);
                
                e->return_string("success|" + item.id);
            } else {
                e->return_string("error|Daftar belanja tidak ditemukan");
            }
        } else {
            e->return_string("error|Format data salah");
        }
    }
    catch (const std::exception& ex) {
        std::cerr << "Error in handleAddItemToShoppingList: " << ex.what() << std::endl;
        e->return_string("error|Server error");
    }
}

void handleCreateInventory(webui::window::event* e) {
    try {
        std::string name = e->get_string();
        Inventory inventory;
        inventory.id = generateId();
        inventory.name = name;
        inventory.createdAt = getCurrentDateTime();
        inventories.push_back(inventory);
        
        e->return_string("success|" + inventory.id);
    }
    catch (const std::exception& ex) {
        std::cerr << "Error in handleCreateInventory: " << ex.what() << std::endl;
        e->return_string("error|Server error");
    }
}

void handleAddItemToInventory(webui::window::event* e) {
    try {
        std::string data = e->get_string();
        size_t firstDelim = data.find("|");
        
        if (firstDelim != std::string::npos) {
            std::string inventoryId = data.substr(0, firstDelim);
            std::string itemData = data.substr(firstDelim + 1);
            
            // Parse item data
            size_t delim = 0;
            std::vector<std::string> parts;
            while ((delim = itemData.find("|")) != std::string::npos) {
                parts.push_back(itemData.substr(0, delim));
                itemData.erase(0, delim + 1);
            }
            parts.push_back(itemData);
            
            if (parts.size() >= 4) {
                Inventory* inv = findInventory(inventoryId);
                if (inv) {
                    Item item;
                    item.id = generateId();
                    item.name = parts[0];
                    item.price = std::stod(parts[1]);
                    item.quantity = std::stoi(parts[2]);
                    item.expiryDate = parts[3];
                    item.checked = false;
                    inv->items.push_back(item);
                    
                    e->return_string("success|" + item.id);
                } else {
                    e->return_string("error|Inventaris tidak ditemukan");
                }
            } else {
                e->return_string("error|Format data salah");
            }
        } else {
            e->return_string("error|Format data salah");
        }
    }
    catch (const std::exception& ex) {
        std::cerr << "Error in handleAddItemToInventory: " << ex.what() << std::endl;
        e->return_string("error|Server error");
    }
}

void handleAddFinancial(webui::window::event* e) {
    try {
        std::string data = e->get_string();
        size_t first = data.find("|");
        size_t second = data.find("|", first + 1);
        size_t third = data.find("|", second + 1);
        size_t fourth = data.find("|", third + 1);
        
        if (first != std::string::npos && second != std::string::npos && 
            third != std::string::npos && fourth != std::string::npos) {
            
            Financial financial;
            financial.id = generateId();
            financial.description = data.substr(0, first);
            financial.amount = std::stod(data.substr(first + 1, second - first - 1));
            financial.type = data.substr(second + 1, third - second - 1);
            financial.category = data.substr(third + 1, fourth - third - 1);
            financial.date = getCurrentDateTime();
            
            financials.push_back(financial);
            e->return_string("success|" + financial.id);
        } else {
            e->return_string("error|Format data salah");
        }
    }
    catch (const std::exception& ex) {
        std::cerr << "Error in handleAddFinancial: " << ex.what() << std::endl;
        e->return_string("error|Server error");
    }
}

// Serve HTML file
std::string readHtmlFile(const std::string& filename) {
    std::ifstream file(filename);
    if (!file.is_open()) {
        // Try alternative paths
        std::vector<std::string> paths = {
            filename,
            "./" + filename,
            "../" + filename,
            "../../" + filename
        };
        
        bool found = false;
        for (const auto& path : paths) {
            file.open(path);
            if (file.is_open()) {
                found = true;
                break;
            }
        }
        
        if (!found) {
            std::cerr << "ERROR: File tidak ditemukan: " << filename << std::endl;
            return "<html><body><h1>Error</h1><p>File tidak ditemukan: " + filename + "</p></body></html>";
        }
    }
    
    std::stringstream buffer;
    buffer << file.rdbuf();
    return buffer.str();
}

// Keep window alive - detect if browser disconnects
void handleWindowEvent(webui::window::event* e) {
    // This is called on connection/disconnection events
    // Just keep the connection active
}

int main() {
    try {
        // Initialize default users
        initializeDefaultUsers();
        
        // Create WebUI window
        webui::window win;
        
        // Disable timeout completely
        webui::set_timeout(0);  // 0 = no timeout
        
        // Read HTML
        std::string html = readHtmlFile("index.html");
        
        // Bind window connection event
        win.bind("", handleWindowEvent);
        
        // Bind functions
        win.bind("login", handleLogin);
        win.bind("signup", handleSignUp);
        win.bind("createShoppingList", handleCreateShoppingList);
        win.bind("addItemToShoppingList", handleAddItemToShoppingList);
        win.bind("createInventory", handleCreateInventory);
        win.bind("addItemToInventory", handleAddItemToInventory);
        win.bind("addFinancial", handleAddFinancial);
        
        // Show window with HTML
        win.show(html);
        
        std::cout << "Application running... Close browser window to exit." << std::endl;
        
        // Use async wait to keep application alive
        while (webui::wait_async()) {
            // Sleep to prevent CPU spinning
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
        }
        
        return 0;
    }
    catch (const std::exception& e) {
        std::cerr << "EXCEPTION: " << e.what() << std::endl;
        return 1;
    }
    catch (...) {
        std::cerr << "UNKNOWN ERROR" << std::endl;
        return 1;
    }
}
