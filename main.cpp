#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <iomanip>
#include <algorithm>
#include "webui.h"

// Shopping cart item structure
struct CartItem {
    int id;
    std::string name;
    double value;
    int amount;
    bool checked;
};

// Global cart
std::vector<CartItem> cart;
int nextId = 0;

// Helper function to convert cart to JSON
std::string cartToJson() {
    std::stringstream ss;
    ss << "{\"items\":[";
    
    for (size_t i = 0; i < cart.size(); i++) {
        const CartItem& item = cart[i];
        if (i > 0) ss << ",";
        
        ss << "{\"id\":" << item.id 
           << ",\"name\":\"" << item.name 
           << "\",\"value\":" << std::fixed << std::setprecision(2) << item.value
           << ",\"amount\":" << item.amount
           << ",\"checked\":" << (item.checked ? "true" : "false") << "}";
    }
    
    ss << "],";
    
    // Calculate totals (only include unchecked items)
    int totalItems = 0;
    double totalPrice = 0;
    for (const auto& item : cart) {
        if (!item.checked) {  // Only count unchecked items
            totalItems += item.amount;
            totalPrice += item.value * item.amount;
        }
    }
    
    ss << "\"totalItems\":" << totalItems
       << ",\"totalPrice\":" << std::fixed << std::setprecision(2) << totalPrice << "}";
    
    return ss.str();
}

// Helper function to find item by ID
CartItem* findItemById(int id) {
    for (auto& item : cart) {
        if (item.id == id) return &item;
    }
    return nullptr;
}

// Add item to cart
void add_item(webui_event_t* e) {
    std::string name = webui_get_string_at(e, 0);
    double value = webui_get_float_at(e, 1);
    int amount = (int)webui_get_int_at(e, 2);
    
    if (name.empty() || amount < 1) return;
    
    CartItem item;
    item.id = nextId++;
    item.name = name;
    item.value = value;
    item.amount = amount;
    item.checked = false;
    
    cart.push_back(item);
    webui_return_string(e, cartToJson().c_str());
}

// Delete item from cart
void delete_item(webui_event_t* e) {
    int id = (int)webui_get_int_at(e, 0);
    cart.erase(
        std::remove_if(cart.begin(), cart.end(), 
            [id](const CartItem& item) { return item.id == id; }),
        cart.end()
    );
    webui_return_string(e, cartToJson().c_str());
}

// Toggle item checked status
void toggle_check(webui_event_t* e) {
    int id = (int)webui_get_int_at(e, 0);
    CartItem* item = findItemById(id);
    if (item) {
        item->checked = !item->checked;
    }
    webui_return_string(e, cartToJson().c_str());
}

// Update item value
void update_value(webui_event_t* e) {
    int id = (int)webui_get_int_at(e, 0);
    double value = webui_get_float_at(e, 1);
    CartItem* item = findItemById(id);
    if (item) {
        item->value = value;
    }
    webui_return_string(e, cartToJson().c_str());
}

// Update item amount
void update_amount(webui_event_t* e) {
    int id = (int)webui_get_int_at(e, 0);
    int amount = std::max(1LL, webui_get_int_at(e, 1));
    CartItem* item = findItemById(id);
    if (item) {
        item->amount = amount;
    }
    webui_return_string(e, cartToJson().c_str());
}

// Get current cart
void get_cart(webui_event_t* e) {
    webui_return_string(e, cartToJson().c_str());
}

int main() {
    
    size_t window = webui_new_window();
    
    // Bind backend functions
    webui_bind(window, "add_item", add_item);
    webui_bind(window, "delete_item", delete_item);
    webui_bind(window, "toggle_check", toggle_check);
    webui_bind(window, "update_value", update_value);
    webui_bind(window, "update_amount", update_amount);
    webui_bind(window, "get_cart", get_cart);


    webui_show(window, "index.html");
    webui_wait();
    return 0;
}