import React, { useState } from 'react'


function Client() {
  const [response, setResponse] = useState("")
  const [data, setData] = useState({
    name: "",
    category: "",
    code: "",
    email: "",
    phone: "",
    address: ""
  })
  const handleChange = ({currentTarget : input}) => {
    setData(...data, {[input.name]:[input.value]})
  }
  // const handleSubmit = async () => {
  //   await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       contentType: "application/json",
  //       'authorization': localStorage.getItem('token'),
  //     },
  //     body: JSON.stringify(data)
  //   }).then(response => {
  //     return response.json()
  //   }).then(data => {
  //     setResponse(data.message)
  //   })
  // }

  return (
    <div className='h-[100vh] w-[100vw] bg-white' id='formClient'>
        <div className='h-full w-[32vw] bg-[#FAFAF5] ml-auto mr-auto mt-2 rounded-xl' id='shadow'>
        <h1 className='text-[#989A38] text-3xl text-center pt-6 text-bolder'>Client</h1>
        <form action="">
            <label htmlFor="">Client</label><input type="text"  placeholder='Client Name'  className='border-b-2 border-b-[#AEAEAE] bg-[#FAFAF5] ml-8 w-[28vw] text-sm ' onChange={handleChange}/>
            <label htmlFor="">Category</label><input type="text" placeholder='Choose category' className='border-b-2 border-b-[#AEAEAE] bg-[#FAFAF5] ml-8 w-[28vw] text-sm' onChange={handleChange}/>
            <label htmlFor="">Representative</label><input type="text" placeholder='Representative' className='border-b-2 border-b-[#AEAEAE] bg-[#FAFAF5] ml-8 w-[28vw] text-sm' onChange={handleChange}/>
            <label htmlFor="">Date of creation</label><input type="text" placeholder='Month & year'  className='border-b-2 border-b-[#AEAEAE] bg-[#FAFAF5] ml-8 w-[28vw] text-sm' onChange={handleChange}/>
            <label htmlFor="">Address</label><input type="text" placeholder='Province,district,sector,cell' className='border-b-2 border-b-[#AEAEAE] bg-[#FAFAF5] ml-8 w-[28vw] text-sm' onChange={handleChange}/>
            <label htmlFor="">Email</label><input type="text" placeholder='Email' className='border-b-2 border-b-[#AEAEAE] bg-[#FAFAF5] ml-8 w-[28vw] text-sm' onChange={handleChange}/>
            <label htmlFor="">Phone</label><input type="text" placeholder='Phone' className='border-b-2 border-b-[#AEAEAE] bg-[#FAFAF5] ml-8 w-[28vw] text-sm' onChange={handleChange}/>
            <label htmlFor="">Bank Account(IBAN)</label><input type="text"  placeholder='Code' className='border-b-2 border-b-[#AEAEAE] bg-[#FAFAF5] ml-8 w-[28vw] text-sm' onChange= {handleChange}/>
            <button type='submit' className='h-8 w-40 bg-[#989A38] text-white ml-32 hover:bg-white  border-2 border-[#989A38] hover:text-[#989A38] rounded-sm'>Add Client</button>
         </form>

      </div>
      <div className='flex '>
        <svg width="180" height="182" viewBox="0 0 180 182" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-0' >
          <g filter="url(#filter0_d_18_637)">
            <circle cx="55" cy="53" r="75" fill="#FAFAF5" />
          </g>
          <defs>
            <filter id="filter0_d_18_637" x="-70" y="-68" width="250" height="250" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_637" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_637" result="shape" />
            </filter>
          </defs>
        </svg>

        <svg width="380" height="364" viewBox="0 0 380 364" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute right-0 top-0'>
          <g filter="url(#filter0_d_15_510)">
            <ellipse cx="497.5" cy="-126" rx="487.5" ry="476" fill="#FAFAF5" />
          </g>
          <defs>
            <filter id="filter0_d_15_510" x="0" y="-608" width="995" height="972" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_510" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_510" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>


      <div className='flex'>
        <svg width="472" height="300" viewBox="0 0 472 300" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute  bottom-0'>
          <g filter="url(#filter0_d_18_635)">
            <ellipse cx="-24.0206" cy="494.14" rx="487.5" ry="476" transform="rotate(49.0928 -24.0206 494.14)" fill="#FAFAF5" />
          </g>
          <defs>
            <filter id="filter0_d_18_635" x="-519.991" y="0.527832" width="991.941" height="995.225" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_635" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_635" result="shape" />
            </filter>
          </defs>
        </svg>

        <svg width="181" height="174" viewBox="0 0 181 174" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute right-0 bottom-0'>
          <g filter="url(#filter0_d_18_636)">
            <circle cx="125" cy="121" r="75" fill="#FAFAF5" />
          </g>
          <defs>
            <filter id="filter0_d_18_636" x="0" y="0" width="250" height="250" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_636" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_636" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

    </div>
  )
}

export default Client