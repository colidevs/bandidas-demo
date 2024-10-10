import type {Metadata} from "next";

import {FaInstagram, FaWhatsapp} from "react-icons/fa";

import {StoreApi} from "@/modules/store";
import {CartProviderClient} from "@/modules/cart";

import "./globals.css";

export const metadata: Metadata = {
  title: "bandidasburger-delivery",
  description: "Generated by colidevs CLI",
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const store = await StoreApi.fetch();

  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-background px-4 font-sans antialiased">
        <header className="text-xl font-bold leading-[4rem]">
          <img alt="Banner de Bandidas Burger" src="/assets/banner.jpg" />
          <div>
            <div className="-mt-20 rounded-full p-1 sm:-mt-12">
              <img
                alt="Avatar de Bandidas Burger"
                className="h-32 w-32 min-w-[128px] rounded-full border-8 border-background"
                src="/assets/avatar.jpg"
              />
            </div>
            <div>
              <div>
                <p>{store.name}</p>
                <p>{store.description}</p>
              </div>
              <div className="flex gap-2">
                <a
                  aria-label="Instagram"
                  href={store.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-black dark:text-white">
                    <FaInstagram size={24} />
                  </div>
                </a>
                <a
                  aria-label="WhatsApp"
                  href={store.whatsapp}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-black dark:text-white">
                    <FaWhatsapp size={24} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </header>
        <main className="py-8">
          <CartProviderClient>{children}</CartProviderClient>
        </main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} bandidasburger-delivery
        </footer>
      </body>
    </html>
  );
}
