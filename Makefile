TAG = registry.betunit.com/data-ops/crm-data-provider
VERSION = v0.0.7

docker-run: docker-build
	docker run -it $(TAG):$(VERSION)

docker-build:
	docker build -t $(TAG):$(VERSION) -f Dockerfile .

docker-push:
	docker push $(TAG):$(VERSION)

.PHONY: docker
docker: docker-build
	docker push $(TAG):$(VERSION)

