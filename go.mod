module github.com/olive105/golang-angular/main

go 1.16

replace github.com/olive105/golang-angular/handlers => /handlers

require (
	github.com/auth0-community/go-auth0 v1.0.0 // indirect
	github.com/gin-gonic/gin v1.7.3
	github.com/olive105/golang-angular v0.0.0-20210812142232-4d8cd36e5b8a // indirect
	github.com/olive105/golang-angular/handlers v0.0.0-00010101000000-000000000000
	github.com/rs/xid v1.3.0
	gopkg.in/square/go-jose.v2 v2.6.0 // indirect
)
