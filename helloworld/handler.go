package function

import (
	"fmt"
)

// Handle a serverless request
func Handle(req []byte) string {
	// return fmt.Sprintf("Hello function. You said: %s", string(req))
	return fmt.Sprintf("Hello Codius?!?!")
}
