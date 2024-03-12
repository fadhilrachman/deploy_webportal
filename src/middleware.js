// import { cookies } from "next/headers";
// import axios from "@next/axios";
import { NextResponse } from "next/server";
// import fetch from "node-fetch";
import { redirect } from "next/navigation";

export async function middleware(req, res) {
  // Mendapatkan host dari header

  // AMBIL DATA SEKOLAH
  const response = await (
    await fetch("https://test.bisasekolah.id/v1/web-portal/ppdb/list-school")
  ).json();

  // NAMA SUBDOMAIN
  const host = req.headers.get("Host").split(".")?.[0];

  // MENCARI SUBDOMAIN YANG SAMA DARI DATA SEKOLAH
  const getSchool = response?.data.find((res) => res.domain == host);

  console.log({ url: req.url });
  // if (!getSchool) {
  //   return NextResponse.redirect("/school-not-found", req.url);
  // }
  // Pisahkan host menjadi subdomain dan domain
  // const subdomain = host.split(".")[0];
  // console.log({ host });
  console.log({ getSchool, cuy: host });
}
