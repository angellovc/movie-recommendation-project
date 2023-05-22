import Swal from "sweetalert2";

const fireError = (error:string) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
        footer: 'Something went wrong!',
      })
}

const request = async (input:string) => {
    try {
        const response = await fetch(`http://192.168.1.12:3000/movies?message=${input}`);
        const movie = await response.json();
        console.log(movie);
        if (movie.statusCode === 400) {
            fireError('Try to be more descriptive asking for your movie');
        }
        return movie;
    } catch(error) {
        fireError('Internal Server Error');
    }
}

export default request;