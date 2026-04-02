#include "database.h"
#include <sqlite3.h>
#include <iostream>

sqlite3* db;

bool initDatabase() {

    if(sqlite3_open("shopping.db",&db)){
        std::cout<<"DB error"<<std::endl;
        return false;
    }

    const char* sql = R"(

    CREATE TABLE IF NOT EXISTS items(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user TEXT,
        name TEXT,
        jumlah INTEGER,
        harga REAL,
        checked INTEGER DEFAULT 0
    );

    )";

    char* err;

    sqlite3_exec(db,sql,NULL,NULL,&err);

    return true;
}

bool addItem(
    const std::string& user,
    const std::string& name,
    int jumlah,
    double harga
){

    std::string sql =
    "INSERT INTO items(user,name,jumlah,harga) VALUES(?,?,?,?)";

    sqlite3_stmt* stmt;

    sqlite3_prepare_v2(db,sql.c_str(),-1,&stmt,NULL);

    sqlite3_bind_text(stmt,1,user.c_str(),-1,NULL);
    sqlite3_bind_text(stmt,2,name.c_str(),-1,NULL);
    sqlite3_bind_int(stmt,3,jumlah);
    sqlite3_bind_double(stmt,4,harga);

    sqlite3_step(stmt);

    sqlite3_finalize(stmt);

    return true;
}

std::vector<Item> getItems(const std::string& user){

    std::vector<Item> items;

    std::string sql =
    "SELECT * FROM items WHERE user=?";

    sqlite3_stmt* stmt;

    sqlite3_prepare_v2(db,sql.c_str(),-1,&stmt,NULL);

    sqlite3_bind_text(stmt,1,user.c_str(),-1,NULL);

    while(sqlite3_step(stmt)==SQLITE_ROW){

        Item item;

        item.id = sqlite3_column_int(stmt,0);
        item.name = (char*)sqlite3_column_text(stmt,2);
        item.jumlah = sqlite3_column_int(stmt,3);
        item.harga = sqlite3_column_double(stmt,4);
        item.checked = sqlite3_column_int(stmt,5);

        items.push_back(item);
    }

    sqlite3_finalize(stmt);

    return items;
}

bool toggleItem(int id,bool checked){

    std::string sql =
    "UPDATE items SET checked=? WHERE id=?";

    sqlite3_stmt* stmt;

    sqlite3_prepare_v2(db,sql.c_str(),-1,&stmt,NULL);

    sqlite3_bind_int(stmt,1,checked);
    sqlite3_bind_int(stmt,2,id);

    sqlite3_step(stmt);

    sqlite3_finalize(stmt);

    return true;
}

bool deleteItem(int id){

    std::string sql =
    "DELETE FROM items WHERE id=?";

    sqlite3_stmt* stmt;

    sqlite3_prepare_v2(db,sql.c_str(),-1,&stmt,NULL);

    sqlite3_bind_int(stmt,1,id);

    sqlite3_step(stmt);

    sqlite3_finalize(stmt);

    return true;
}