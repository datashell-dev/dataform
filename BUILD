load("@aspect_rules_js//js:defs.bzl", "js_binary")
load("@bazel_gazelle//:def.bzl", "gazelle")
load("@npm//:defs.bzl", "npm_link_all_packages")

package(default_visibility = ["//visibility:public"])

npm_link_all_packages(name = "node_modules")

exports_files([
    "tsconfig.json",
    "package.json",
    "readme.md",
    "version.bzl",
])

# PROTOBUF_DEPS = [
#     "@npm//protobufjs",
#     "@npm//protobufjs-cli",
#     # these deps are needed even though they are not automatic transitive deps of
#     # protobufjs since if they are not in the runfiles then protobufjs attempts to
#     # run `npm install` at runtime to get thhem which fails as it tries to access
#     # the npm cache outside of the sandbox
#     "@npm//semver",
#     "@npm//chalk",
#     "@npm//glob",
#     "@npm//jsdoc",
#     "@npm//minimist",
#     "@npm//tmp",
#     "@npm//uglify-js",
#     "@npm//uglify-es",
#     "@npm//espree",
#     "@npm//escodegen",
#     "@npm//estraverse",
# ]

# js_binary(
#     name = "pbjs",
#     data = PROTOBUF_DEPS,
#     entry_point = "@npm//:node_modules/protobufjs-cli/bin/pbjs",
#     # source_map = False,
# )

# js_binary(
#     name = "pbts",
#     data = PROTOBUF_DEPS,
#     entry_point = "@npm//:node_modules/protobufjs-cli/bin/pbts",
#     # install_source_map_support = False,
# )

js_binary(
    name = "run_tslint",
    entry_point = "//:node_modules/tslint/bin/tslint",
    node_options = ["--preserve-symlinks"],
    # install_source_map_support = False,
)

# gazelle:prefix github.com/dataform-co/dataform
# gazelle:proto package
# gazelle:proto_group go_package
gazelle(name = "gazelle")
