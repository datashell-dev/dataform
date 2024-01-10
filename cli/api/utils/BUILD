package(default_visibility = ["//visibility:public"])

load("//tools:ts_library.bzl", "ts_library")

ts_library(
    name = "utils",
    srcs = glob(["**/*.ts"]),
    deps = [
        "//common/strings",
        "//packages/@dataform/core",
        "//protos:ts",
        "@npm//@dataform/core",
        "@npm//@types/node",
        "@npm//object-sizeof",
    ],
)
