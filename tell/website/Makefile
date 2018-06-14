YARN ?= yarn
CF   ?= cf
APP  ?= tell-website
DOCS   = $(shell find ../docs -type f)
BLOG   = $(shell find blog -type f)
CORE   = $(shell find core -type f)
I18N   = $(shell find i18n -type f)
PAGES  = $(shell find pages -type f)
STATIC = $(shell find static -type f)

all: build

yarn.lock node_modules: package.json
	$(YARN) install

build/tell/index.html: $(DOCS) $(BLOG) $(CORE) $(I18N) $(PAGES) $(STATIC)
	$(YARN) build

setup: yarn.lock node_modules

build: build/tell/index.html

deploy: build
	$(CF) zero-downtime-push $(APP) -f manifest.yml

clean:
	-rm -r build

start:
	$(YARN) start

.PHONY: deploy clean start
