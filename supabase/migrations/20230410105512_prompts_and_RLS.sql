create table "public"."prompts" (
    "id" uuid not null,
    "created_at" timestamp with time zone not null default now(),
    "submitted_by" uuid not null,
    "title" text,
    "description" text,
    "content" text not null,
    "author" text,
    "author_url" text,
    "votes" integer not null default 0,
    "tags" text[] not null default '{}'::text[]
);


alter table "public"."prompts" enable row level security;

CREATE UNIQUE INDEX prompts_pkey ON public.prompts USING btree (id);

alter table "public"."prompts" add constraint "prompts_pkey" PRIMARY KEY using index "prompts_pkey";

alter table "public"."prompts" add constraint "prompts_submitted_by_fkey" FOREIGN KEY (submitted_by) REFERENCES auth.users(id) ON DELETE SET NULL not valid;

alter table "public"."prompts" validate constraint "prompts_submitted_by_fkey";

create policy "Enable insert for authenticated users only"
on "public"."prompts"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."prompts"
as permissive
for select
to public
using (true);


create policy "Only service_role users can update"
on "public"."prompts"
as permissive
for update
to service_role
using (true)
with check (true);



