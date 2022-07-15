const AppError = require('../modules/app-error');
const configs = require('./configs');

module.exports = function () {
    return {
        tables_V0: {
            "lotto_tickets": "`gambling`.`lotto_tickets`",
            "lotto_users": "`gambling`.`lotto_users`",
            "nla_report": "`gambling`.`nla_report`",
            "audit_issues": "`gambling`.`audit_issues`",
            "s_draws_toto": "`betoffice`.`s_draws_toto`",
            "s_stakes_toto": "`betoffice`.`s_stakes_toto`",
            "auth_clients": "`betoffice`.`auth_clients`",
            "auth_codes": "`betoffice`.`auth_codes`",
            "auth_tokens": "`betoffice`.`auth_tokens`",
            "global_settings": "`betoffice`.`global_settings`",
            "projects": "`betoffice`.`projects`",
            "s_acc_days": "`betoffice`.`s_acc_days`",
            "s_acc_transactions": "`betoffice`.`s_acc_transactions`",
            "s_auth_access": "`betoffice`.`s_auth_access`",
            "s_balance_log": "`betoffice`.`s_balance_log`",
            "s_bases": "`betoffice`.`s_bases`",
            "s_bets": "`gambling`.`s_bets`",
            "s_bets_content": "`gambling`.`s_bets_content`",
            "bm_bets": "`gambling`.`bm_bets`",
            "bm_bets_content": "`gambling`.`bm_bets_content`",
            "bm_bets_load": "`gambling`.`bm_bets_load`",
            "s_blacklist": "`betoffice`.`s_blacklist`",
            "s_blocks": "`betoffice`.`s_blocks`",
            "s_bookmakers": "`betoffice`.`s_bookmakers`",
            "s_cache": "`betoffice`.`s_cache`",
            "s_calculations": "`betoffice`.`s_calculations`",
            "s_cashbox": "`betoffice`.`s_cashbox`",
            "s_cashbox_amount_limit_log": "`betoffice`.`s_cashbox_amount_limit_log`",
            "s_champ": "`betoffice`.`s_champ`",
            "s_clinks": "`betoffice`.`s_clinks`",
            "s_config": "`betoffice`.`s_config`",
            "s_config_copy": "`betoffice`.`s_config_copy`",
            "s_draws_five": "`betoffice`.`s_draws_five`",
            "s_draws_kaboom": "`betoffice`.`s_draws_kaboom`",
            "s_draws_keno": "`betoffice`.`s_draws_keno`",
            "s_draws_vf": "`betoffice`.`s_draws_vf`",
            "s_draws_wof": "`betoffice`.`s_draws_wof`",
            "s_employee_activities": "`betoffice`.`s_employee_activities`",
            "s_employee_activity": "`betoffice`.`s_employee_activity`",
            "s_employee_log_in": "`betoffice`.`s_employee_log_in`",
            "s_employee_reports": "`betoffice`.`s_employee_reports`",
            "s_employee_reports_daily": "`betoffice`.`s_employee_reports_daily`",
            "s_employees": "`betoffice`.`s_employees`",
            "s_employees_copy1": "`betoffice`.`s_employees_copy1`",
            "s_employees_copy2": "`betoffice`.`s_employees_copy2`",
            "s_employees_copy_before_add_parent": "`betoffice`.`s_employees_copy_before_add_parent`",
            "s_event_scores": "`betoffice`.`s_event_scores`",
            "s_eventbases": "`betoffice`.`s_eventbases`",
            "s_eventbases_live": "`betoffice`.`s_eventbases_live`",
            "s_events": "`betoffice`.`s_events`",
            "s_events_vf": "`betoffice`.`s_events_vf`",
            "s_franchise_end_day_limits": "`betoffice`.`s_franchise_end_day_limits`",
            "s_franchises": "`betoffice`.`s_franchises`",
            "s_jackpots": "`betoffice`.`s_jackpots`",
            "s_limits": "`betoffice`.`s_limits`",
            "s_limits_storage": "`betoffice`.`s_limits_storage`",
            "s_log": "`betoffice`.`s_log`",
            "s_log2": "`betoffice`.`s_log2`",
            "s_managers": "`betoffice`.`s_managers`",
            "s_messages": "`betoffice`.`s_messages`",
            "s_optypes": "`betoffice`.`s_optypes`",
            "s_prestakes_offline": "`betoffice`.`s_prestakes_offline`",
            "s_stakes_sport_offline": "`betoffice`.`s_prestakes_offline`",
            "s_races_dogs": "`betoffice`.`s_races_dogs`",
            "s_races_horse": "`betoffice`.`s_races_horse`",
            "s_report": "`betoffice`.`s_report`",
            "s_report_daily": "`betoffice`.`s_report_daily`",
            "s_report_daily2": "`betoffice`.`s_report_daily2`",
            "s_report_daily_copy": "`betoffice`.`s_report_daily_copy`",
            "s_report_gboard": "`betoffice`.`s_report_gboard`",
            "s_rez": "`betoffice`.`s_rez`",
            "s_runtime": "`betoffice`.`s_runtime`",
            "s_sessions": "`betoffice`.`s_sessions`",
            "s_sessions_keys": "`betoffice`.`s_sessions_keys`",
            "s_shops_activity": "`betoffice`.`s_shops_activity`",
            "s_sports": "`betoffice`.`s_sports`",
            "s_stakes_d": "`betoffice`.`s_stakes_d`",
            "s_stakes_fv": "`betoffice`.`s_stakes_fv`",
            "s_stakes_h": "`betoffice`.`s_stakes_h`",
            "s_stakes_k": "`betoffice`.`s_stakes_k`",
            "s_stakes_kb": "`betoffice`.`s_stakes_kb`",
            "eg_keno_stakes": "`gambling`.`eg_keno_stakes`",
            "eg_wof_stakes": "`gambling`.`eg_wof_stakes`",
            "s_stakes_sport": "`betoffice`.`s_prestakes`",
            "s_stakes_vf": "`betoffice`.`s_stakes_vf`",
            "s_stakes_wof": "`betoffice`.`s_stakes_wof`",
            "s_status_log": "`betoffice`.`s_status_log`",
            "s_terminal_amount_limit_log": "`betoffice`.`s_terminal_amount_limit_log`",
            "s_terminal_end_day_limits": "`betoffice`.`s_terminal_end_day_limits`",
            "s_tv_banners": "`betoffice`.`s_tv_banners`",
            "s_users": "`betoffice`.`s_users`",
            "system_jackpot_history": "`betoffice`.`system_jackpot_history`",
            "terminal_pins": "`betoffice`.`terminal_pins`",
            "terminal_tickets": "`betoffice`.`terminal_tickets`",
            "test": "`betoffice`.`test`",
            "turbo_draws": "`betoffice`.`turbo_draws`",
            "view_union_sport": "`betoffice`.`view_union_sport`",
            "z_accounts": "`betoffice`.`z_accounts`",
            "z_agent_materials": "`betoffice`.`z_agent_materials`",
            "z_agent_balances": "`betoffice`.`z_agent_balances`",
            "z_agent_daily_report": "`betoffice`.`z_agent_daily_report`",
            "z_agent_transactions": "`betoffice`.`z_agent_transactions`",
            "z_agents": "`betoffice`.`z_agents`",
            "z_cards": "`betoffice`.`z_cards`",
            "z_cards_transactions": "`betoffice`.`z_cards_transactions`",
            "z_daily_cards_top": "`betoffice`.`z_daily_cards_top`",
            "z_daily_tickets": "`betoffice`.`z_daily_tickets`",
            "z_downloads": "`betoffice`.`z_downloads`",
            "z_downloads_pdf": "`betoffice`.`z_downloads_pdf`",
            "z_eventlinks": "`betoffice`.`z_eventlinks`",
            "z_logs": "`betoffice`.`z_logs`",
            "z_messages": "`betoffice`.`z_messages`",
            "z_metas": "`betoffice`.`z_metas`",
            "z_moto_tickets": "`betoffice`.`z_moto_tickets`",
            "z_pcodes": "`betoffice`.`z_pcodes`",
            "z_sessions": "`betoffice`.`z_sessions`",
            "z_transactions": "`betoffice`.`z_transactions`",
            "z_vcodes": "`betoffice`.`z_vcodes`",
            "z_worldcup_tickets": "`betoffice`.`z_worldcup_tickets`",
            "z_zone_sports": "`betoffice`.`z_zone_sports`",
            "z_zones": "`betoffice`.`z_zones`",
            "z_staff": "`betoffice`.`z_staff`",
            "activation_codes": "`gambling`.`activation_codes`",
            "artoor_stats": "`gambling`.`artoor_stats`",
            "q_faq_categories": "`gambling`.`q_faq_categories`",
            "q_faq_questions": "`gambling`.`q_faq_questions`",
            "casino_all_games": "`gambling`.`casino_all_games`",
            "casino_extras": "`gambling`.`casino_extras`",
            "casino_bets": "`gambling`.`casino_bets`",
            "bets_casino": "`gambling`.`bets_casino`",
            "games_casino": "`gambling`.`games_casino`",
            "cashbacks": "`gambling`.`cashbacks`",
            "log_balance": "`gambling`.`log_balance`",
            "log_sign_in": "`gambling`.`log_sign_in`",
            "meta_data": "`gambling`.`meta_data`",
            "notes": "`gambling`.`notes`",
            "pvp_deals": "`gambling`.`pvp_deals`",
            "r_codes": "`gambling`.`r_codes`",
            "reports_daily": "`gambling`.`reports_daily`",
            "sliders": "`gambling`.`sliders`",
            "slotomatic_games": "`gambling`.`slotomatic_games`",
            "slotomatic_bets": "`gambling`.`slotomatic_bets`",
            "sms_messages": "`gambling`.`sms_messages`",
            "text_messages": "`gambling`.`text_messages`",
            "text_messages_users": "`gambling`.`text_messages_users`",
            "tmp_phones": "`gambling`.`tmp_phones`",
            "tokens_activation": "`gambling`.`tokens_activation`",
            "tokens_reset_password": "`gambling`.`tokens_reset_password`",
            "transactions": "`gambling`.`transactions`",
            "transactions_daily_report": "`gambling`.`transactions_daily_report`",
            "player_restrictions": "`gambling`.`player_restrictions`",
            "transactions_units": "`gambling`.`transactions_units`",
            "user_balances": "`gambling`.`user_balances`",
            "users": "`gambling`.`users`",
            "users_turnover": "`gambling`.`users_turnover`",
            "users_verification_images": "`gambling`.`users_verification_images`",
            "w_template_banners": "`gambling`.`w_template_banners`",
            "w_template_contents": "`gambling`.`w_template_contents`",
            "acl_cb_roles": "`betoffice`.`acl_cb_roles`",
            "acl_cb_roles_resources": "`betoffice`.`acl_cb_roles_resources`",
            "acl_cb_resources": "`betoffice`.`acl_cb_resources`",

            "casino_report": "`gambling`.`casino_report`",
            "gamehub_bets": "`gambling`.`gamehub_bets`",
            "gamehub_gamelist": "`gambling`.`gamehub_gamelist`",
            "casino_tags": "`gambling`.`casino_tags`",
            "fk_casino_tags_games": "`gambling`.`fk_casino_tags_games`",
            "fk_casino_tags_games_v1": "`gambling`.`fk_casino_tags_games_v1`",
            "tvbet_transactions": "`gambling`.`tvbet_transactions`",

            "gift_items": "`gambling`.`gift_items`",
            "gift_bundles": "`gambling`.`gift_bundles`",
            "gift_fk_bundle_items": "`gambling`.`gift_fk_bundle_items`",
            "gift_boxes": "`gambling`.`gift_boxes`",
            "sport_report": "`gambling`.`sport_report`",
            "bm_limits": "`gambling`.`bm_limits`",
            "fm_pre_collection_markets": "`gambling`.`fm_pre_collection_markets`",
            "fm_pre_collections": "`gambling`.`fm_pre_collections`",
            "bm_sportsbook_tree": "`gambling`.`bm_sportsbook_tree`",
            "lotto_draws": "`gambling`.`lotto_draws`",
            "lotto_tickets": "`gambling`.`lotto_tickets`",
            "lotto_users": "`gambling`.`lotto_users`",
            "lotto_transactions": "`gambling`.`lotto_transactions`",
            "segments": "`gambling`.`segments`",
            "users_segments": "`gambling`.`users_segments`",
            "s_fastbets": "`gambling`.`s_fastbets`",
            "s_fastbets_content": "`gambling`.`s_fastbets_content`",
            "bm_priorities_competitions": "`gambling`.`bm_priorities_competitions`",
            "bm_priorities_sports": "`gambling`.`bm_priorities_sports`",
            "bm_priorities_countries": "`gambling`.`bm_priorities_countries`",
            "bm_priorities_country_competitions": "`gambling`.`bm_priorities_country_competitions`",
            "bm_sportsbook_prices": "`gambling`.`bm_sportsbook_prices`",
            "bm_bets_load": "`gambling`.`bm_bets_load`",
            "bm_bets": "`gambling`.`bm_bets`",
            "bm_bets_content": "`gambling`.`bm_bets_content`",
        },
        tables_V1: {
            "lotto_tickets": "lotto_tickets",
            "lotto_users": "lotto_users",
            "nla_report": "nla_report",
            "audit_issues": "audit_issues",
            "s_draws_toto": "s_draws_toto",
            "s_stakes_toto": "s_stakes_toto",
            "s_bets": "s_bets",
            "s_bets_content": "s_bets_content",
            "bm_bets": "bm_bets",
            "bm_bets_content": "bm_bets_content",
            "bm_bets_load": "bm_bets_load",
            "casino_all_games": "casino_all_games",
            "casino_extras": "casino_extras",
            "bets_casino": "bets_casino",
            "games_casino": "games_casino",
            "casino_bets": "casino_bets",
            "cashbacks": "cashbacks",
            "log_balance": "log_balance",
            "log_sign_in": "log_sign_in",
            "meta_data": "meta_data",
            "notes": "notes",
            "pvp_deals": "pvp_deals",
            "r_codes": "r_codes",
            "reports_daily": "reports_daily",
            "s_stakes_sport": "s_stakes_sport",
            "s_stakes_sport_offline": "s_stakes_sport_offline",

            "s_stakes_k": "s_stakes_k",
            "s_stakes_kb": "s_stakes_kb",
            "s_stakes_vf": "s_stakes_vf",
            "s_stakes_wof": "s_stakes_wof",
            "s_stakes_d": "s_stakes_d",
            "s_stakes_h": "s_stakes_h",
            "eg_keno_stakes": "eg_keno_stakes",
            "eg_wof_stakes": "eg_wof_stakes",
            "s_config": "s_config",
            "s_cashbox": "s_cashbox",
            "s_optypes": "s_optypes",
            "s_acc_days": "s_acc_days",
            "s_acc_transactions": "s_acc_transactions",

            "s_users": "s_users",
            "s_shops_activity": "s_shops_activity",
            "s_employees": "s_employees",
            "s_employee_activity": "s_employee_activity",
            "s_employee_activities": "s_employee_activities",
            "s_employee_reports": "s_employee_reports",
            "s_employee_reports_daily": "s_employee_reports_daily",

            "s_jackpots": "s_jackpots",

            "s_report_gboard": "s_report_gboard",
            "s_report_daily": "s_report_daily",
            "s_report_daily2": "s_report_daily2",
            "erca_reports": "erca_reports",

            "s_status_log": "s_status_log",

            "sliders": "sliders",
            "sms_messages": "sms_messages",
            "text_messages": "text_messages",
            "text_messages_users": "text_messages_users",
            "tmp_phones": "tmp_phones",
            "tokens_activation": "tokens_activation",
            "tokens_reset_password": "tokens_reset_password",
            "transactions": "transactions",
            "transactions_daily_report": "transactions_daily_report",
            "player_restrictions": "player_restrictions",
            "transactions_units": "transactions_units",
            "user_balances": "user_balances",
            "users": "users",
            "users_turnover": "users_turnover",
            "users_verification_images": "users_verification_images",
            "users_banks_accounts": "users_banks_accounts",
            "w_template_banners": "w_template_banners",
            "w_template_contents": "w_template_contents",
            "z_agent_balances": "z_agent_balances",
            "z_agent_daily_report": "z_agent_daily_report",
            "z_agent_transactions": "z_agent_transactions",
            "z_agents": "z_agents",
            "z_daily_tickets": "z_daily_tickets",
            "z_staff": "z_staff",
            "acl_cb_roles": "acl_cb_roles",
            "acl_cb_roles_resources": "acl_cb_roles_resources",
            "acl_cb_resources": "acl_cb_resources",

            "tvbet_transactions": "tvbet_transactions",
            "casino_report": "casino_report",
            "gamehub_gamelist": "gamehub_gamelist",
            "gamehub_bets": "gamehub_bets",
            "casino_tags": "casino_tags",
            "fk_casino_tags_games": "fk_casino_tags_games",
            "fk_casino_tags_games_v1": "fk_casino_tags_games_v1",

            "gift_items": "gift_items",
            "gift_bundles": "gift_bundles",
            "gift_fk_bundle_items": "gift_fk_bundle_items",
            "gift_boxes": "gift_boxes",
            "sport_report": "sport_report",

            "slotomatic_games": "slotomatic_games",
            "slotomatic_bets": "slotomatic_bets",

            "s_draws_keno": "s_draws_keno",
            "s_draws_kaboom": "s_draws_kaboom",
            "s_races_dogs": "s_races_dogs",
            "s_races_horse": "s_races_horse",
            "s_draws_wof": "s_draws_wof",

            "s_events_vf": "`betoffice`.`s_events_vf`",
            "s_balance_log": "s_balance_log",

            "z_agent_materials": "z_agent_materials",
            "fm_pre_collection_markets": "fm_pre_collection_markets",
            "fm_pre_collections": "fm_pre_collections",
            "bm_sportsbook_tree": "bm_sportsbook_tree",
            "bm_limits": "bm_limits",
            "lotto_draws": "`lotto_draws`",
            "segments": "segments",
            "users_segments": "users_segments",
            "s_fastbets": "s_fastbets",
            "s_fastbets_content": "s_fastbets_content",
            "z_logs": "z_logs",
            "z_metas": "z_metas",
            "banks": "banks",
            "bm_priorities_competitions": "bm_priorities_competitions",
            "bm_priorities_sports": "bm_priorities_sports",
            "bm_priorities_countries": "bm_priorities_countries",
            "bm_priorities_country_competitions": "bm_priorities_country_competitions",
            "bm_sportsbook_prices": "bm_sportsbook_prices",
            "bm_bets_load": "bm_bets_load",
            "bm_bets": "bm_bets",
            "bm_bets_content": "bm_bets_content",
        },
        games_version: {
            "sport": "V0",
            "keno": "V1",
            "wof": "V1",
            "colorboom": "V1",
            "toto": "V1",
            "turbokeno": "V1",
            "turbowof": "V1",
            "casino": "V2"
        },
        games_version_timestamp: {
            V0: 'date_created',
            V1: 'dt',
            V2: 'inserted_at'
        },
        games_tables: {
            "sport": "s_bets",
            "keno": "s_stakes_k",
            "wof": "s_stakes_wof",
            "colorboom": "s_stakes_kb",
            "toto": "s_stakes_toto",
            "turbokeno": "eg_keno_stakes",
            "turbowof": "eg_wof_stakes",
            "casino": "bets_casino"
        },
        /**
         * @type {import('../types').db.Operator[]}
         */
        headers: [],
        flat: [],
        init (knex, cb) {
            const _this = this;
            const pms = [];
            pms.push(knex.raw("SELECT * FROM `betoffice`.`projects` WHERE header=1"));
            pms.push(knex.raw("SELECT * FROM `betoffice`.`projects`"));

            Promise.all(pms).then(function (rows) {
                _this.headers = rows[0][0];
                _this.flat = rows[1][0];
                if (cb) return cb('done');
            }, function (err) {
                return cb('Error', err);
            })
        },

        getProjectCredentials(project) {
            if (!configs.projects.list[project]) throw new AppError('Project not found => ' + project);
            return configs.projects.list[project].db.mysql;
        },
        domainConf (host) {
            //console.log(host);
            //console.log(host,host.split(':'),host.split(':')[0]);
            var domain = host.split(':')[0];
            return _.find(this.flat, function (i) { return i.agent_domain == domain || i.dash_domain == domain; })
        },
        getCurrentProject (req, user) {
            //console.log(host,host.split(':'),host.split(':')[0]);
            if (user && user.project)
                return user.project;

            var domain = req.headers.host.split(':')[0];
            return _.find(this.flat, function (i) { return i.agent_domain == domain || i.dash_domain == domain; })
        },
        getProjectByBinding (binding) {
            var result = _.find(this.headers, function (i) { return i.binding == binding; })
            return result || { project: '' };
        },
        projectConf (name) {
            return _.find(this.headers, function (i) { return i.project == name; })
        },
        // domainDB:function(host){
        //     var conf = this.domainConf(host)
        //     return conf ? 'Z'+conf.project : 'betoffice';
        // },
        getProjectGames (project) {
            if (!this.getNames().includes(project)) throw new AppError('Project not found => ' + project);
            if (!configs.projects.list[project].games) throw new AppError('Project not found => ' + project);
            return configs.projects.list[project].games;
        },
        getGamesTimestamp (game) {
            if (!this.games_version[game]) throw new AppError('Game not found => ' + game);
            return this.games_version_timestamp[this.getGamesVersion(game)];
        },
        getGamesVersion (game) {
            if (!this.games_version[game]) throw new AppError('Game not found => ' + game);
            return this.games_version[game];
        },
        getGamesTable (game) {
            if (!this.games_tables[game]) throw new AppError('Game not found => ' + game);
            return this.games_tables[game];
        },
        getProjectTable (project, name) {
            var conf = this.projectConf(project);
            var version = conf ? conf.version : 0;
            if (!this.tables_V1[name])
                throw new AppError("Table not found: " + name);
            if (version) {

                if (this.tables_V1[name].indexOf('.') > -1)
                    return this.tables_V1[name];
                else
                    return "`Z" + project + "`.`" + this.tables_V1[name] + "`";
            } else {
                return this.tables_V0[name];
            }
        },
        splitTable (projectTable) {
            const splitted = projectTable.replace(/`/gi, '').split('.');
            return {
                db: splitted[0],
                table: splitted[1]
            }
        },
        getAllTables (name) {
            var _this = this;
            var tables = [];
            _.each(_this.headers, function (project) {
                if (project.version) {
                    if (_this.tables_V1[name].indexOf('.') > -1)
                        tables.push(_this.tables_V1[name]);
                    else
                        tables.push("`Z" + project.project + "`.`" + _this.tables_V1[name] + "`");
                } else {
                    tables.push(_this.tables_V0[name]);
                }
            });
            return _.uniq(tables);
        },
        getAllTablesAsObject (name) {
            var _this = this;
            var tables = {};
            var dupes = [];
            _.each(_this.headers, function (project) {
                if (project.version) {
                    if (_this.tables_V1[name].indexOf('.') > -1) {
                        if (dupes.indexOf(_this.tables_V1[name]) < 0)
                            tables[project.project] = _this.tables_V1[name];
                    }
                    else {
                        if (dupes.indexOf("`Z" + project.project + "`.`" + _this.tables_V1[name] + "`") < 0)
                            tables[project.project] = "`Z" + project.project + "`.`" + _this.tables_V1[name] + "`";
                    }
                } else {
                    if (dupes.indexOf(_this.tables_V0[name]) < 0)
                        tables[project.project] = _this.tables_V0[name];
                }
                dupes.push(tables[project.project]);
            });
            return tables;
        },
        getNames () {
            return _.pluck(this.headers, 'project');
        },
        getNamesAndCountries () {
            return this.headers.map(function (pr) { return { project: pr.project, country: pr.country } });
        }
    }
}
