#include <iostream>
#include "webui.h"
using namespace std;

void handle_daftar(webui_event_t* e) {
    cout << "Daftar Belanja diklik!" << endl;
}

void handle_inventaris(webui_event_t* e) {
    cout << "Inventaris diklik!" << endl;
    webui_show(e->window, "inventory.html");
  
}

void back_to_home(webui_event_t* e) {
    webui_show(e->window, "index.html");
}
void handle_keuangan(webui_event_t* e) {
    cout << "Hitung Keuangan diklik!" << endl;
}

int main() {
    size_t window = webui_new_window();
    webui_set_root_folder(window, ".");
    
    webui_bind(window, "handle_daftar", handle_daftar);
    webui_bind(window, "handle_inventaris", handle_inventaris);
    webui_bind(window, "handle_keuangan", handle_keuangan);
    webui_bind(window, "back_to_home", back_to_home);
    
    webui_open_url("index.html");
    
    webui_wait();
    return 0;
}