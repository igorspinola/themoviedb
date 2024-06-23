import React from 'react';

export default function Page({ params }: { params: { email: string } }) {
  fetchUsuario(params.email) {
    axios.get(´´)
  }

  return(
    <section>
      My Post: {params.email}
    </section>
  )
};