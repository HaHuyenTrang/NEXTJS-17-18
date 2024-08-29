import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>page
      <img width={200} height={200} src="https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg" alt="" />
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
