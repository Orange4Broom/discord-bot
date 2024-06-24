{ pkgs }: {
  deps = [
    pkgs.nodejs-18_x
    pkgs.yarn
    pkgs.typescript
    pkgs.nodePackages.concurrently
  ];
}