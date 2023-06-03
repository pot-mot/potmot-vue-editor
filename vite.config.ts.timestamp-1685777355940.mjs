// vite.config.ts
import { defineConfig } from "file:///D:/vue/vue3/potmot_components/editor/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/vue/vue3/potmot_components/editor/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { prismjsPlugin } from "file:///D:/vue/vue3/potmot_components/editor/node_modules/vite-plugin-prismjs/dist/index.js";
import { resolve } from "path";
var __vite_injected_original_dirname = "D:\\vue\\vue3\\potmot_components\\editor";
var vite_config_default = defineConfig({
  // 如果需要打包成lib文件取消注释即可
  build: {
    assetsDir: "assets",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "potmot-vue-editor",
      fileName: "potmot-vue-editor"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [
    vue(),
    // dts(),
    prismjsPlugin({
      languages: [
        "javascript",
        "typescript",
        "css",
        "css-extras",
        "html",
        "less",
        "sass",
        "scss",
        "svg",
        "icon",
        "markup",
        "http",
        "uri",
        "url",
        "c",
        "cpp",
        "cmake",
        "objc",
        "rust",
        "go",
        "php",
        "phpdoc",
        "perl",
        "java",
        "javadoc",
        "groovy",
        "kotlin",
        "kt",
        "kts",
        "scala",
        "latex",
        "tex",
        "matlab",
        "sql",
        "graphql",
        "mongodb",
        "erlang",
        "lua",
        "python",
        "py",
        "django",
        "jinja2",
        "csharp",
        "dotnet",
        "cobol",
        "makefile",
        "json",
        "json5",
        "jsonp",
        "xml",
        "yaml",
        "yml",
        "ini",
        "toml",
        "bash",
        "shell",
        "batch",
        "docker",
        "dockerfile",
        "git",
        "vim",
        "dns-zone",
        "log",
        "qml",
        "scheme",
        "swift"
      ],
      css: false
    })
  ],
  base: "./"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx2dWVcXFxcdnVlM1xcXFxwb3Rtb3RfY29tcG9uZW50c1xcXFxlZGl0b3JcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHZ1ZVxcXFx2dWUzXFxcXHBvdG1vdF9jb21wb25lbnRzXFxcXGVkaXRvclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovdnVlL3Z1ZTMvcG90bW90X2NvbXBvbmVudHMvZWRpdG9yL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB7cHJpc21qc1BsdWdpbn0gZnJvbSBcInZpdGUtcGx1Z2luLXByaXNtanNcIlxuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICdwYXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIC8vIFx1NTk4Mlx1Njc5Q1x1OTcwMFx1ODk4MVx1NjI1M1x1NTMwNVx1NjIxMGxpYlx1NjU4N1x1NEVGNlx1NTNENlx1NkQ4OFx1NkNFOFx1OTFDQVx1NTM3M1x1NTNFRlxuICAgIGJ1aWxkOiB7XG4gICAgICAgIGFzc2V0c0RpcjogXCJhc3NldHNcIixcbiAgICAgICAgbGliOiB7XG4gICAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcbiAgICAgICAgICAgIG5hbWU6IFwicG90bW90LXZ1ZS1lZGl0b3JcIixcbiAgICAgICAgICAgIGZpbGVOYW1lOiBcInBvdG1vdC12dWUtZWRpdG9yXCJcbiAgICAgICAgfSxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZ1ZTogJ1Z1ZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcGx1Z2luczogW1xuICAgICAgICB2dWUoKSxcbiAgICAgICAgLy8gZHRzKCksXG4gICAgICAgIHByaXNtanNQbHVnaW4oe1xuICAgICAgICAgICAgbGFuZ3VhZ2VzOiBbXG4gICAgICAgICAgICAgICAgJ2phdmFzY3JpcHQnLCAndHlwZXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgJ2NzcycsICdjc3MtZXh0cmFzJywgJ2h0bWwnLCAnbGVzcycsICdzYXNzJywgJ3Njc3MnLFxuICAgICAgICAgICAgICAgICdzdmcnLCAnaWNvbicsXG4gICAgICAgICAgICAgICAgJ21hcmt1cCcsXG4gICAgICAgICAgICAgICAgJ2h0dHAnLCAndXJpJywgJ3VybCcsXG4gICAgICAgICAgICAgICAgJ2MnLCAnY3BwJywgJ2NtYWtlJywgJ29iamMnLFxuICAgICAgICAgICAgICAgICdydXN0JyxcbiAgICAgICAgICAgICAgICAnZ28nLFxuICAgICAgICAgICAgICAgICdwaHAnLCAncGhwZG9jJyxcbiAgICAgICAgICAgICAgICAncGVybCcsXG4gICAgICAgICAgICAgICAgJ2phdmEnLCAnamF2YWRvYycsICdncm9vdnknLCAna290bGluJywgJ2t0JywgJ2t0cycsICdzY2FsYScsXG4gICAgICAgICAgICAgICAgJ2xhdGV4JywgJ3RleCcsICdtYXRsYWInLFxuICAgICAgICAgICAgICAgICdzcWwnLCAnZ3JhcGhxbCcsICdtb25nb2RiJyxcbiAgICAgICAgICAgICAgICAnZXJsYW5nJyxcbiAgICAgICAgICAgICAgICAnbHVhJyxcbiAgICAgICAgICAgICAgICAncHl0aG9uJywgJ3B5JywgJ2RqYW5nbycsICdqaW5qYTInLFxuICAgICAgICAgICAgICAgICdjc2hhcnAnLCAnZG90bmV0JyxcbiAgICAgICAgICAgICAgICAnY29ib2wnLFxuICAgICAgICAgICAgICAgICdtYWtlZmlsZScsXG4gICAgICAgICAgICAgICAgJ2pzb24nLCAnanNvbjUnLCAnanNvbnAnLFxuICAgICAgICAgICAgICAgICd4bWwnLCAneWFtbCcsICd5bWwnLCAnaW5pJywgJ3RvbWwnLFxuICAgICAgICAgICAgICAgICdiYXNoJywgJ3NoZWxsJywgJ2JhdGNoJyxcbiAgICAgICAgICAgICAgICAnZG9ja2VyJywgJ2RvY2tlcmZpbGUnLFxuICAgICAgICAgICAgICAgICdnaXQnLFxuICAgICAgICAgICAgICAgICd2aW0nLFxuICAgICAgICAgICAgICAgICdkbnMtem9uZScsXG4gICAgICAgICAgICAgICAgJ2xvZycsXG4gICAgICAgICAgICAgICAgJ3FtbCcsXG4gICAgICAgICAgICAgICAgJ3NjaGVtZScsXG4gICAgICAgICAgICAgICAgJ3N3aWZ0J1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNzczogZmFsc2UsXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgYmFzZTogXCIuL1wiXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3UyxTQUFRLG9CQUFtQjtBQUNuVSxPQUFPLFNBQVM7QUFDaEIsU0FBUSxxQkFBb0I7QUFDNUIsU0FBUSxlQUFjO0FBSHRCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBO0FBQUEsRUFFeEIsT0FBTztBQUFBLElBQ0gsV0FBVztBQUFBLElBQ1gsS0FBSztBQUFBLE1BQ0QsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDZDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ1gsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDTCxLQUFLO0FBQUEsUUFDVDtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ0wsSUFBSTtBQUFBO0FBQUEsSUFFSixjQUFjO0FBQUEsTUFDVixXQUFXO0FBQUEsUUFDUDtBQUFBLFFBQWM7QUFBQSxRQUNkO0FBQUEsUUFBTztBQUFBLFFBQWM7QUFBQSxRQUFRO0FBQUEsUUFBUTtBQUFBLFFBQVE7QUFBQSxRQUM3QztBQUFBLFFBQU87QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQVE7QUFBQSxRQUFPO0FBQUEsUUFDZjtBQUFBLFFBQUs7QUFBQSxRQUFPO0FBQUEsUUFBUztBQUFBLFFBQ3JCO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUFPO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUFRO0FBQUEsUUFBVztBQUFBLFFBQVU7QUFBQSxRQUFVO0FBQUEsUUFBTTtBQUFBLFFBQU87QUFBQSxRQUNwRDtBQUFBLFFBQVM7QUFBQSxRQUFPO0FBQUEsUUFDaEI7QUFBQSxRQUFPO0FBQUEsUUFBVztBQUFBLFFBQ2xCO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUFVO0FBQUEsUUFBTTtBQUFBLFFBQVU7QUFBQSxRQUMxQjtBQUFBLFFBQVU7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUFRO0FBQUEsUUFBUztBQUFBLFFBQ2pCO0FBQUEsUUFBTztBQUFBLFFBQVE7QUFBQSxRQUFPO0FBQUEsUUFBTztBQUFBLFFBQzdCO0FBQUEsUUFBUTtBQUFBLFFBQVM7QUFBQSxRQUNqQjtBQUFBLFFBQVU7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDSjtBQUFBLE1BQ0EsS0FBSztBQUFBLElBQ1QsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLE1BQU07QUFDVixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
