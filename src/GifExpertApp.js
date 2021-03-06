import { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />

      <hr />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default GifExpertApp;
