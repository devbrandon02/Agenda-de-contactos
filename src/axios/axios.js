import React from 'react'
import axios from 'axios';

const URL = 'http://localhost:4000'

export const clienteAxios = axios.create({
  baseURL: URL
})
