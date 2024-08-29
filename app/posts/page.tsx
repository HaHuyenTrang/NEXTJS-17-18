import Image from 'next/image'
import React from 'react'
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Danh sách bài viết",
    description: "Chi tiết bài viết",
    keywords: "posts",
};

export default function page() {
   
  
    const product = [
        {
            id: 1,
            title: "Accusamus beatae ad facilis",
            thumbnailUrl: "https://i.pinimg.com/474x/3b/4b/6d/3b4b6d47ba1621fdf16bebde58077504.jpg"
        },
        {
            id: 2,
            title: "reprehenderit est deserunt",
            thumbnailUrl: "https://i.pinimg.com/564x/e8/1f/67/e81f678d16aa664e01cde4c2f5f97453.jpg"
        },
        {
            id: 3,
            title: "officia porro iure quia",
            thumbnailUrl: "https://i.pinimg.com/564x/c6/dc/8c/c6dc8c2764bf1a42b11e97eb095a9593.jpg"
        },
        {
            id: 4,
            title: "qui eius qui autem sed",
            thumbnailUrl: "https://i.9mobi.vn/cf/Images/np/2022/11/14/hinh-nen-dien-thoai-cute-7.jpg"
        },
        {
            id: 5,
            title: "epudiandae iusto deleniti",
            thumbnailUrl: "https://ambalgvn.org.vn/wp-content/uploads/mang-anh-nen-de-thuong-11.jpg"
        },
        {
            id: 6,
            title: "iusto sunt nobis quasi veritatis",
            thumbnailUrl: "https://toplistvn.net/wp-content/uploads/2022/03/hinh-nen-de-thuong-3.jpg"
        }
    ]
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.map((item) => (
                    <div key={item.id} className="border p-4 rounded shadow">
                        <img src={item.thumbnailUrl} alt={item.title} className="w-full  object-cover rounded mb-4" />
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                    </div>
                ))}
            </div>c
            <Image
                height={200}
                width={200}
                src={
                    "https://gaubongonline.vn/wp-content/uploads/2024/04/Capybara-banh-hamburger-1.jpg"
                }
                alt="capypara"
            ></Image>
        </div>
    )
}
