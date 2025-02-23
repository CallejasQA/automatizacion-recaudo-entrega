import { Task, Activity, PerformsActivities } from '@serenity-js/core';
import { PostRequest, Send } from '@serenity-js/rest';

export const CrearGuia = (payload: object): Task =>
  Task.where(
    `#actor crea la guía con payload ${JSON.stringify(payload)}`,
    {
      performAs: async (actor: PerformsActivities): Promise<void> => {
        await actor.attemptsTo(
          Send.a(PostRequest.to('/guias/cm-guias-ms/guia').with(payload))
        );
      }
    } as Activity
  );







