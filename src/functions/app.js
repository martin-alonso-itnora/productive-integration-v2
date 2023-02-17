import axios from 'axios';
import _ from 'lodash';
export default class App {
  async initialize(){
    const apiKey = process.env.API_KEY;
    const organizationId = process.env.ORGANIZATION_ID;
    const apiUrl = process.env.API_URL;

    await getProjectId(
      apiKey,
      organizationId,
      apiUrl
    );

    // console.log(projects);


  }
}

const getProjectId = async(apiKey = '', organizationId = '', apiUrl = '') => {
  try {
    const headers = {
      "X-Auth-Token": apiKey,
      "X-Organization-Id": organizationId
    }

    const res = await axios.get(
      `${apiUrl}/projects`,
      { headers }
    );

    const projects = [];

    res.data.data.forEach(async(project) => {
      // projects.push({
      //   id: project.id,
      //   name: project.attributes.name
      // });
      await getServiceId(
        apiKey,
        organizationId,
        apiUrl,
        project.id
      );
    });
    
    return projects;
  } catch (error) {
    console.log(error);
  }
}

const getServiceId = async(apiKey = '', organizationId = '', apiUrl = '', projectId = '') => {
  try {
    const headers = {
      "X-Auth-Token": apiKey,
      "X-Organization-Id": organizationId
    }

    const res = await axios.get(
      `${apiUrl}/services`,
      {
        headers,
        params: {
          project_id: projectId
        }
      }
    );

    const services = res.data.data;
    console.log(services)
    
    // return projects;
  } catch (error) {
    console.log(error);
  }
}