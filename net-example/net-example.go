package main

import (
	"net/http"

	"github.com/emilkje/net-example/mypackage"
)

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}

func handler(w http.ResponseWriter, req *http.Request) {
	message := mypackage.Public()
	w.Write([]byte(message))
}
