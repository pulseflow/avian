# Contributing

contributions are positively welcome and encouraged!

## getting started

1. download/fork the repository and `cd` into it
2. install the [prerequisites](#prerequisites)
3. follow the related [build instructions](#building)

## prerequisites

- [rust](https://www.rust-lang.org/learn/get-started)
- [nodejs](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)
- [LLDB](https://lldb.llvm.org/) (recommended)
- ...or [GDB](https://www.gnu.org/software/gdb/)

## building

to build/debug the avian project, you can use the convient `avian-cli` tool:

```sh
cargo avian --help
```

there are mulitple commands available, but the most important ones are:

- `cargo avian build` - builds the project
- `cargo avian run` - builds and runs the project
- `cargo avian test` - builds and runs the tests
- `cargo avian debug` - builds and runs the project in debug mode
- `cargo avian config` - configures the build system (see [configuring](#configuring))

### using lldb to debug

to use lldb, you need to install it first (see [prerequisites](#prerequisites)).
then, use `cargo avian config` to set the `gdb` option to `true`: `cargo avian config --gdb true`

then, you can use the `cargo avian debug` command to build and run the project in debug mode.
finally you can use lldb to debug the project: `lldb` and `(lldb) gdb-remote localhost:1234`.

### using gdb to debug

to use gdb, you need to install it first (see [prerequisites](#prerequisites))
then, use `cargo avian config` to set the `gdb` option to `true`: `cargo avian config --gdb true`

then, you can use the `cargo avian debug` command to build and run the project in debug mode.
finally you can use gdb to debug the project: `gdb` and `(gdb) target remote localhost:1234`.

## configuring

the `avian-cli` tool allows you to configure the build system to your liking.

you can configure the following options:

- `cargo avian config --arch <x86_64/aarch64>` - sets the target architecture
- `cargo avian config --mode <debug/release>` - sets the build mode
- `cargo avian config --gdb <true/false>` - sets whether to open a gdb port or not
