# New York city heating problems

## Problem Statement

The people of New York use the 311 system to report complaints about the non-emergency problems to local authorities. Various agencies in New York are assigned these problems. The Department of Housing Preservation and Development of New York City is the agency that processes 311 complaints that are related to housing and buildings.

In the last few years, the number of 311 complaints coming to the Department of Housing Preservation and Development has increased significantly. Although these complaints are not necessarily urgent, the large volume of complaints and the sudden increase is impacting the overall efficiency of operations of the agency.

Therefore, the Department of Housing Preservation and Development has approached your organization to help them manage the large volume of 311 complaints they are receiving every year.

The agency needs answers to several questions. The answers to those questions must be supported by data and analytics. These are some of their questions:

* Which type of complaint should the Department of Housing Preservation and Development of New York City focus on first?
* Should the Department of Housing Preservation and Development of New York City focus on any particular set of boroughs, ZIP codes, or street (where the complaints are severe) for the specific type of complaints you identified in response to Question 1?
* Does the Complaint Type that you identified in response to question 1 have an obvious relationship with any particular characteristic or characteristics of the houses or buildings?
* Can a predictive model be built for a future prediction of the possibility of complaints of the type that you have identified in response to question 1?

Your organization has assigned you as the lead data scientist to provide the answers to these questions. You need to work on getting answers to them by following the standard approach of data science and machine learning.

## What you will learn

You'll use following data science techniques to address the four main business problems identified in this project: 

* Ingest the course datasets.
* Explore the datasets and identify the key problem.
* Identify and create features to create machine learning models.
* Explore various machine learning algorithms to arrive at the best possible machine learning model.

## Target Audiences

You will be greatly interested by the subjects addressed in this solution if you are...

* An architect, you will get a deeper understanding on how all the components work together for an analytics end to end solution.
* A developer, you will get a broader view of the solution end to end and get existing starting code, and practices you may want to reuse during your future implementation. We focus on data analytics, machine learning, and deploying model solution in hybrid cloud addressing patterns and non-functional requirements as CI/CD, Test Driven Development, ...
* A project manager, you may understand all the artifacts to develop in an analytics solution.

## Pre-requisites

* Understand how to use data science techniques such as data analysis, data visualization, and machine learning by using Python
* Access to ICP for Data instance or IBM Watson Studio on IBM Cloud

## Datasets

You will use two datasets from the Department of Housing Preservation and Development of New York City to address their problems.

### 311 complaint dataset

This dataset is available at (NYC open data web site - 311 calls)[https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9]. You can download part of this data but restrict your data to the limited number of fields. Otherwise, your data size will be unnecessarily large, and it might not work within your environment. Too much data can also be very slow to process and analyze.

### PLUTO dataset for housing

This dataset for housing can be accessed from (NYC open data web site - Pluto)[https://data.cityofnewyork.us/City-Government/Primary-Land-Use-Tax-Lot-Output-PLUTO-/xuk2-nczf. After you download the data, use only the part that is specific to the borough that you are interested in based on your analysis.

## Implementation

### User stories

- [ ] As a support center staff I want to visualize the current events per zicode or boroughs in table format.
- [ ] As a support center staff I want to visualize the current events per zicode or boroughs in geographical view.
- [ ] As a support center staff I want to prioritize work force based on multiple events coming from the same zipcode as well as prediction from the model by creating a task assignment.