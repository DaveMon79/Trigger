import React from "react";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { PET } from '../utils/queries';
import Auth from "../utils/auth";

const Pet = () => {
  const { petId } = useParams();

  const { loading, data } = useQuery(PET, {
    variables: { petId: petId },
  });

  // Check if data is returning from the query
  const pet = data?.pet || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  if (!pet?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return <div>Individual pet page here</div>;
};

export default Pet;
