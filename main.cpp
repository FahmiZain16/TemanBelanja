#include <iostream>
#include "webui.h"
#include "database.h"

void handle_daftar(webui_event_t* e){
    
    webui_show(e->window,"daftar.html");

}

void handle_add_item(webui_event_t* e){

    const char* name = webui_get_string_at(e,0);
    std::cout << "INSERT: " << name << std::endl;
    int jumlah = atoi(webui_get_string_at(e,1));
    double harga = atof(webui_get_string_at(e,2));

    addItem("default",name,jumlah,harga);

}

void handle_load_items(webui_event_t* e){

    auto items = getItems("default");

    std::string json = "[";

    for(int i=0;i<items.size();i++){

        json += "{";
        json += "\"id\":" + std::to_string(items[i].id) + ",";
        json += "\"nama\":\"" + items[i].name + "\",";
        json += "\"jumlah\":" + std::to_string(items[i].jumlah) + ",";
        json += "\"harga\":" + std::to_string(items[i].harga);
        json += "}";

        if(i != items.size()-1) json += ",";
    }

    json += "]";

    webui_return_string(e,json.c_str());
}

void handle_delete_item(webui_event_t* e){

    int id = atoi(webui_get_string_at(e,0));

    deleteItem(id);

}

int main(){

    initDatabase();

    size_t window = webui_new_window();

    webui_set_root_folder(window,".");

    webui_bind(window,"handle_daftar",handle_daftar);

    webui_bind(window,"add_item",handle_add_item);

    webui_bind(window,"load_items",handle_load_items);

    webui_bind(window,"delete_item",handle_delete_item);

    const char* url = webui_start_server(window,"login.html");

    webui_open_url(url);

    webui_wait();

    webui_clean();

    return 0;
}