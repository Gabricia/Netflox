import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Foire aux questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Input placeholder="Adresse e-mail" />
        <OptForm.Button>Commencer</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
          abonner ou réactiver votre abonnement.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
