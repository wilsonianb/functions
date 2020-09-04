package function

import (
	"fmt"
	"io/ioutil"
)

// Handle a serverless request
func Handle(req []byte) string {
	secret, err := ioutil.ReadFile("/var/openfaas/secrets/secret")

	if err != nil {
		return fmt.Sprintf("err: %s", err)
	}
	return fmt.Sprintf("the unsealed secret: %s", string(secret))
}
