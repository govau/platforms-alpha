YARN ?= yarn
CF   ?= cf
APP  ?= platforms-website
SRC  = $(shell find src -type f)
PUB  = $(shell find public -type f)

all: build

yarn.lock node_modules: package.json
	$(YARN) install

build/index.html: $(SRC) $(PUB)
	$(YARN) build

setup: yarn.lock node_modules

build: build/index.html

deploy: build
	$(CF) zero-downtime-push $(APP) -f manifest.yml

clean:
	-rm -r build

start: $(SRC) $(PUB)
	$(YARN) start

.PHONY: deploy clean start
