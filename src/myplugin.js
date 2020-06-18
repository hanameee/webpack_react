class MyPlugin {
    apply(compiler) {
        compiler.hooks.done.tap("MyPlugin", (stats) => {
            console.log("MyPlugin 실행");
        });
        compiler.hooks.emit.tap("MyPlugin", (compilation) => {
            // 번들링 된 결과물을 source 변수에 저장한다
            const source = compilation.assets["main.js"].source();
            // 번들 소스를 얻어오는 함수를 재정의한다
            compilation.assets["main.js"].source = () => {
                const banner = [
                    "/**",
                    " * 이것은 MyPlugin이 처리한 결과입니다.",
                    ` * Build Date: ${Date.now()}`,
                    " */",
                    "",
                ].join("\n");
                return banner + "\n" + source;
            };
            console.log(source);
        });
    }
}

module.exports = MyPlugin;
