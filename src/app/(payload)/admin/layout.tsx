import "./custom.scss";

import config from "@payload-config";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import type { Metadata } from "next";
import type { ServerFunctionClient } from "payload";
import React from "react";

import { importMap } from "./importMap";

type Args = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "YALL Admin",
};

const serverFunction: ServerFunctionClient = async (args) => {
  "use server";
  return handleServerFunctions({ ...args, config, importMap });
};

export default function Layout({ children }: Args) {
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  );
}
