function Main() {
    
  
    const fetchData = async () => {
      setLoading(true);
      let data = await fetch(
        `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${input}`,
        options
      );
      data = await data.json();
      setLoading(false);
      setTemp(data.temp);
      setFeelsLike(data.feels_like);
      console.log("Data", data);
    };
  

  
    useEffect(() => {
      fetchData();
    }, [input]);
  

  
    return (

    );
  }
  