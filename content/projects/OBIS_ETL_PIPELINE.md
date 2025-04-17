---
date: '2025-04-17' 
title: 'OBIS Deep Sea ETL Pipeline'
github: 'https://github.com/toto-thi/obis_etl_pipeline'
external: ''
tech:
  - Python
  - Polars
  - Apache Airflow
  - PostgreSQL
  - Docker
  - Pandas 
company: '' 
showInProjects: true
---

This project implements an end-to-end ETL pipeline to process deep-sea marine organism occurrence data from the Ocean Biodiversity Information System (OBIS). It fetches data via the OBIS API (filtered by minimum depth), performs cleaning, validation, and normalization using Python and Polars, and loads the structured data into a normalized PostgreSQL schema. The entire workflow is orchestrated using Apache Airflow running on Docker containers.