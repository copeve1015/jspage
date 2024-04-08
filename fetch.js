import fetch from 'node-fetch';

fetch('https://api.thedogapi.com/v1/breeds')
  .then(response => response.json())
  .then(async data => {
    const name = data.map(item => item.name);
    const idAndName = data.map(item => ({id: item.id, name: item.name}));

    // 이미지 id로 이미지 url 받아오기
    // let images = [];
    // for (const item of data) {
    //   const result = {
    //     id: item.id,
    //     name: item.name,
    //     image_url: await getImageFromImageId(item.reference_image_id),
    //   }
    //   // console.log(result);
    //   images.push(result);
    // }
    // return images;

    // Promise로 하기
    const promiseImages = data.map(item => new Promise((resolve, reject) => {
      getImageFromImageId(item.reference_image_id)
        .then(imageUrl => {
          resolve({
            id: item.id,
            name: item.name,
            image_Url: imageUrl
          })
        })
      })
    )
    return Promise.all(promiseImages);
  })
  .then(dogs => {
    console.log(dogs);
  })
  .catch(error => console.log(error));

  // async function getImageFromImageId(referenceImageId) {
  //   try {
  //     const responseImage = await fetch(`https://api.thedogapi.com/v1/images/${referenceImageId}`);
  //     const imageData = await responseImage.json();
  //     return imageData.url;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // }

    async function getImageFromImageId(referenceImageId) {
    try {
      const responseImage = await fetch(`https://api.thedogapi.com/v1/images/${referenceImageId}`);
      const imageData = await responseImage.json();
      return imageData.url;
    } catch (error) {
      console.log(error);
      return null;
    }
  }