const getComponents = () => document.querySelectorAll(`[data-component]`);

const getDocumentComponents = async (name) => {
  const rest = await fetch(`/components/${name}.html`);
  return await rest.text();
};

export const useComponent = () => {
  const components = getComponents();

  components.forEach(async (component) => {
    const componentData = await getDocumentComponents(component.getAttribute("data-component"));
    component.outerHTML = componentData;
  });
};
