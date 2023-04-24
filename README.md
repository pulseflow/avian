# avian

avian is an open source uwu owo cute operating system made in rust :3

## information

* amd64 (x86_64) and arm64 (aarch64) architectures are supported currently
* avian uses a patched uefi limine as its bootloader
* avian is licensed under the [Apache License 2.0](LICENSE) and provides documentation

## building

see [CONTRIBUTING.md](CONTRIBUTING.md) for more information on how to build avian.

## design

avian makes use of a kernel providing APIs and other functionality. the kernel is ran under a microkernel providing a hardware security system, known as sentinel. the kernel is designed to be minimal and is written in rust. the kernel is responsible for providing the following:

* base system initialization within vms and physical machines
* memory management for various kernel subsystems (virtual memory)
* inter-process communication (ipc) between different processes/machines
* service registry that processes userspace requests and announcements
