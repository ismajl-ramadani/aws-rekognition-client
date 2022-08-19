import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default function useImageLabels(images: any) {
  const [loading, setLoading] = useState(false);
  const [labels, setLabels] = useState<any[]>(labelsDefaultValue(images));
  const [processed, setProcessed] = useState(0);

  useEffect(() => {
    if (processed === images.length) {
      setLoading(false);
    };
  }, [processed, images.length]);

  useEffect(() => {
    setLoading(true);
    setProcessed(0);
    if (images.length > 0) {
      images.forEach((image: any, index: number) => {
        getLabelsFromImage(image, index).then(result => {
            setLabels(labels => ({
              ...labels,
              [index]: {
                status: 'done',
                labels: result['data']['labels'],
              }
            }));
            setProcessed(processed => processed + 1);
          });
      });
    }
  }, []);

  return {
    loading,
    labels,
  };
}

function labelsDefaultValue(images: any): any[] {
  return new Array(images.length).fill({
    status: 'loading',
    labels: [],
  });
}

async function getLabelsFromImage(file: any, i: number) {
  const form = new FormData();
  form.append('image', file, file.name);
  const options = {
    method: 'POST',
    url: process.env['NX_API_ENDPOINT'],
    headers: { 'Content-Type': 'multipart/form-data;' },
    data: form,
  };
  return axios.request(options);
}
