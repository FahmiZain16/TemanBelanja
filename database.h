#ifndef DATABASE_H
#define DATABASE_H

#include <string>
#include <vector>

struct Item {
    int id;
    std::string name;
    int jumlah;
    double harga;
    bool checked;
};

bool initDatabase();

bool addItem(
    const std::string& user,
    const std::string& name,
    int jumlah,
    double harga
);

std::vector<Item> getItems(const std::string& user);

bool toggleItem(int id, bool checked);
bool deleteItem(int id);

#endif