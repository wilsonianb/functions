package function

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
)

// Handle a serverless request
func Handle(req []byte) string {
	var msg = []byte("hello")
	res, err := http.Post("http://echo.openfaas-fn", "text/plain", bytes.NewBuffer(msg))

	if err != nil {
		fmt.Println(err)
		return fmt.Sprintf("%s", err)
	} else {
		fmt.Println("Posted to echo: ", res.Status)
		body, _ := ioutil.ReadAll(res.Body)
		fmt.Println("response Body:", string(body))
		return fmt.Sprintf("Hello, k3s. You said: %s", string(body))
	}
}
