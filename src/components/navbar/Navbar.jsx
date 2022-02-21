import React from 'react'
import "./navbar.scss"

export default function Navbar() {
  return (
    <nav id="home" className="navbar">
        <div className="navbar_container">
            <div className="navbar_title">
                <h1>Stars Friends</h1>
            </div>
        <div className="navbar_link">
            <div className="navbar_link_logo">
              <a href="" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" height="45px" fill="currentColor">
              <path d="M400 200c0 110.5-89.5 200-200 200S0 310.5 0 200 89.5 0 200 0s200 89.5 200 200zM163.4 305.5c88.7 0 137.2-73.5 137.2-137.2 0-2.1 0-4.2-.1-6.2 9.4-6.8 17.6-15.3 24.1-25-8.6 3.8-17.9 6.4-27.7 7.6 10-6 17.6-15.4 21.2-26.7-9.3 5.5-19.6 9.5-30.6 11.7-8.8-9.4-21.3-15.2-35.2-15.2-26.6 0-48.2 21.6-48.2 48.2 0 3.8.4 7.5 1.3 11-40.1-2-75.6-21.2-99.4-50.4-4.1 7.1-6.5 15.4-6.5 24.2 0 16.7 8.5 31.5 21.5 40.1-7.9-.2-15.3-2.4-21.8-6v.6c0 23.4 16.6 42.8 38.7 47.3-4 1.1-8.3 1.7-12.7 1.7-3.1 0-6.1-.3-9.1-.9 6.1 19.2 23.9 33.1 45 33.5-16.5 12.9-37.3 20.6-59.9 20.6-3.9 0-7.7-.2-11.5-.7 21.1 13.8 46.5 21.8 73.7 21.8"></path>
              </svg>
              </a>
            </div>
            <div className="navbar_link_logo">
              <a href="" target="_blank">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="45px" fill="currentColor">
              <path d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 
              24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6288 0 
              12 0ZM5.9208 12.4032L5.9712 12.3216L9.0936 7.4376C9.1392 7.368 
              9.2472 7.3752 9.2808 7.452C9.8016 8.6208 10.2528 10.0752 10.0416 
              10.98C9.9528 11.352 9.7056 11.856 9.4272 12.3216C9.3912 12.3888 9.3528
              12.456 9.3096 12.5208C9.2904 12.5496 9.2568 12.5664 9.2208 12.5664H6.012C5.9256 
              12.5664 5.8752 12.4728 5.9208 12.4032ZM19.8336 14.0832C19.8336 14.1288 19.8072 
              14.1672 19.7688 14.184C19.5264 14.2872 18.6984 14.6688 18.3552 15.1464C17.4768 
              16.368 16.8072 18.1152 15.3072 18.1152H9.0528C6.8352 18.1152 5.04 16.3128 5.04 
              14.088V14.016C5.04 13.9584 5.088 13.9104 5.148 13.9104H8.6328C8.7024 13.9104 8.7528 
              13.9728 8.748 14.0424C8.7216 14.268 8.7648 14.5008 8.8728 14.712C9.0792 15.132 9.5088 
              15.3936 9.972 15.3936H11.6976V14.0472H9.9912C9.9048 14.0472 9.852 13.9464 9.9024 13.8744C9.9216 
              13.8456 9.9408 13.8168 9.9648 13.7832C10.1256 13.5528 10.356 13.1976 10.5864 12.792C10.7424 12.5184 10.8936 12.2256 
              11.016 11.9328C11.04 11.88 11.0592 11.8248 11.0808 11.772C11.1144 11.6784 11.148 11.5896 11.172 
              11.5032C11.196 11.4288 11.2176 11.352 11.2368 11.28C11.2944 11.0304 11.3184 10.7664 11.3184 10.4928C11.3184 10.3848 11.3136 10.272 11.304 10.1664C11.2992 10.0488 11.2848 9.9312 11.2704 9.8136C11.2608 9.7104 11.2416 9.6072 11.2224 9.5016C11.196 9.3456 11.1624 9.1896 11.124 9.0336L11.1096 8.9736C11.0808 8.8656 11.0544 8.7648 11.0208 8.6568C10.9224 8.3208 10.812 7.992 10.692 7.6848C10.6488 7.5624 10.6008 7.4448 10.5504 7.3296C10.4784 7.152 10.404 6.9912 10.3368 6.84C10.3008 6.7704 10.272 6.708 10.2432 6.6432C10.2096 6.5712 10.176 6.4992 10.14 6.4296C10.116 6.3768 10.0872 6.3264 10.068 6.2784L9.8568 5.8896C9.828 5.8368 9.876 5.772 9.9336 5.7888L11.2536 6.1464H11.2584C11.2608 6.1464 11.2608 6.1464 11.2632 6.1464L11.436 6.1968L11.628 6.2496L11.6976 6.2688V5.4864C11.6976 5.1072 12 4.8 12.3768 4.8C12.564 4.8 12.7344 4.8768 12.8544 5.0016C12.9768 5.1264 13.0536 5.2968 13.0536 5.4864V6.6504L13.1952 6.6888C13.2048 6.6936 13.2168 6.6984 13.2264 6.7056C13.26 6.7296 13.3104 6.768 13.3728 6.816C13.4232 6.8544 13.476 6.9024 13.5384 6.9528C13.6656 7.056 13.8192 7.188 13.9848 7.3392C14.028 7.3776 14.0712 7.416 14.112 7.4568C14.3256 7.656 14.5656 7.8888 14.796 8.148C14.8608 8.2224 14.9232 8.2944 14.988 8.3736C15.0504 8.4528 15.12 8.5296 15.1776 8.6064C15.2568 8.7096 15.3384 8.8176 15.4128 8.9304C15.4464 8.9832 15.4872 9.0384 15.5184 9.0912C15.6144 9.2328 15.696 9.3792 15.7752 9.5256C15.8088 9.5928 15.8424 9.6672 15.8712 9.7392C15.96 9.936 16.0296 10.1352 16.0728 10.3368C16.0872 10.38 16.0968 10.4256 16.1016 10.4688V10.4784C16.116 10.536 16.1208 10.5984 16.1256 10.6632C16.1448 10.8672 16.1352 11.0736 16.092 11.28C16.0728 11.3664 16.0488 11.448 16.02 11.5368C15.9888 11.6208 15.96 11.7072 15.9216 11.7912C15.8472 11.9616 15.7608 12.1344 15.6576 12.2928C15.624 12.3528 15.5832 12.4152 15.5448 12.4752C15.5016 12.5376 15.456 12.5976 15.4176 12.6552C15.3624 12.7296 15.3048 12.8064 15.2448 12.876C15.192 12.948 15.1392 13.02 15.0792 13.0848C14.9976 13.1832 14.9184 13.2744 14.8344 13.3632C14.7864 13.4208 14.7336 13.4808 14.6784 13.5336C14.6256 13.5936 14.5704 13.6464 14.5224 13.6944C14.4384 13.7784 14.3712 13.8408 14.3136 13.896L14.1768 14.0184C14.1576 14.0376 14.1312 14.0472 14.1048 14.0472H13.0536V15.3936H14.376C14.6712 15.3936 14.952 15.2904 15.18 15.096C15.2568 15.0288 15.5952 14.736 15.996 14.2944C16.0104 14.2776 16.0272 14.268 16.0464 14.2632L19.6968 13.2072C19.7664 13.188 19.8336 13.2384 19.8336 13.3104V14.0832Z">
              </path>
              </svg>
              </a>
            </div>
        </div>  
        </div>
    </nav>
  )
}
