ifdef OS
	RM = del /Q
	MV = mv
else
	ifeq ($(shell uname), Linux)
		RM = rm -rf
		MV = mv
	endif
endif


build: config.js posts/*/*.md pages/*.js
	git submodule update --init --recursive
	cd easyNextBlog/ && git checkout main
	cd easyNextBlog/ && npm i
	node generate.js
	npm run --prefix easyNextBlog/ build

run: 
	python -m http.server --directory out 3001
clean:
	${RM} out
