import axios from "axios";
import { useState, Component } from "react";

const BASE_URL = "https://restcountries.com/";
const version = "v3.1/";
const query = "all";
const url = `${BASE_URL}${version}${query}`;

class CountryCard extends Component {
  state = {
    country: null,
  };

  componentDidMount() {
    axios
      .get(url)
      .then((result) => {
        // let countryData = result.data;
        let slicedCountry = result.data.slice(0, 8);
        console.log(slicedCountry);

        this.setState({
          country: slicedCountry,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.country) {
      return <p> Loading</p>;
    }

    return (
      <div>
        {this.state.country.map((item, index) => {
          return (
            <a href="#" key={index}>
              <img src={item.flags.png} />
              <h2>{item.name.official}</h2>
              <p>
                Population: <span>{item.population}</span>
              </p>
              <p>
                Region: <span>{item.region}</span>
              </p>
              <p>
                Capital: <span>{item.capital[0]}</span>
              </p>
            </a>
          );
        })}
      </div>
    );
  }
}

export default CountryCard;
