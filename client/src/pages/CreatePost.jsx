import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';
const CreatePost = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    });
    const [generatingImg, setgeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);

  return (
    <section className="max-w-7xl mx-auto">
         <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Create imaginitive and visually stunning images through DALL-E AI and share the with the community</p>
      </div>
      <form className="mt-16 max-w">



      </form>
        </section>
  )
}

export default CreatePost