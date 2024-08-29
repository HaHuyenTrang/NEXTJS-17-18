import Image from 'next/image';
import React from 'react';

export default function Page() {
    const product = [
        {
            id: 1,
            title: "Accusamus beatae ad facilis",
            thumbnailUrl: "https://gaubongonline.vn/wp-content/uploads/2024/04/Capybara-banh-hamburger-1.jpg"
        },
        {
            id: 2,
            title: "reprehenderit est deserunt",
            thumbnailUrl: "https://gaubongonline.vn/wp-content/uploads/2024/04/Capybara-banh-hamburger-1.jpg"
        },
        {
            id: 3,
            title: "officia porro iure quia",
            thumbnailUrl: "https://gaubongonline.vn/wp-content/uploads/2024/04/Capybara-banh-hamburger-1.jpg"
        },
        {
            id: 4,
            title: "qui eius qui autem sed",
            thumbnailUrl: "https://gaubongonline.vn/wp-content/uploads/2024/04/Capybara-banh-hamburger-1.jpg"
        },
        {
            id: 5,
            title: "epudiandae iusto deleniti",
            thumbnailUrl: "https://gaubongonline.vn/wp-content/uploads/2024/04/Capybara-banh-hamburger-1.jpg"
        },
        {
            id: 6,
            title: "iusto sunt nobis quasi veritatis",
            thumbnailUrl: "https://gaubongonline.vn/wp-content/uploads/2024/04/Capybara-banh-hamburger-1.jpg"
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.map((item) => (
                    <div key={item.id} className="border p-4 rounded shadow">
                        <Image
                            src={item.thumbnailUrl}
                            alt={item.title}
                            width={300} // Chiều rộng mong muốn
                            height={200} // Chiều cao mong muốn
                            className="w-full object-cover rounded mb-4"
                            loading="lazy" // Bật lazy loading
                        />
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                    </div>
                ))}
            </div>
            <Image
                height={200}
                width={200}
                src="https://gaubongonline.vn/wp-content/uploads/2024/04/Capybara-banh-hamburger-1.jpg"
                alt="capypara"
                loading="lazy" // Bật lazy loading
            />
        </div>
    );
}