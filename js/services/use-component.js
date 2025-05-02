const getComponents = () => {
  const components = document.querySelectorAll(`[data-component]`);
  return components;
};

const getDocumentComponents = async (name) => {
  const rest = await fetch(`/components/${name}.html`);
  const data = await rest.text();
  return data;
};

export const useComponent = () => {
  const components = getComponents();

  components.forEach(async (component) => {
    const componentName = component.getAttribute("data-component");
    const componentData = await getDocumentComponents(componentName);
    component.outerHTML = componentData;
  });
};
