System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioClip, resources, sys, _crd, ccclass, property, BlTools;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("BlTools", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioClip = _cc.AudioClip;
      resources = _cc.resources;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b73e4TTGZpFQbd6Buvv07Po", "bl_tools", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      (function (_BlTools) {
        class AudioManager extends Component {
          static playMusic(name) {
            const path = `audio/music/${name}`;
            resources.load(path, AudioClip, (err, clip) => {
              if (err) {
                console.warn(err);
                return;
              }

              clip === null || clip === void 0 ? void 0 : clip.setLoop(true);
              clip === null || clip === void 0 ? void 0 : clip.play();
            });
          }

          static playSound(name) {
            const path = `audio/sound/${name}`;
            resources.load(path, AudioClip, (err, clip) => {
              if (err) {
                console.warn(err);
                return;
              }

              clip === null || clip === void 0 ? void 0 : clip.setLoop(false);
              clip === null || clip === void 0 ? void 0 : clip.playOneShot(1);
            });
          }

        }

        _BlTools.AudioManager = AudioManager;

        class CustomEventListener extends Component {
          static on(eventName, cb, target) {
            if (!this.handle[eventName]) {
              this.handle[eventName] = [];
            }

            const data = {
              func: cb,
              target
            };
            this.handle[eventName].push(data);
          }

          static off(eventName, cb, target) {
            const list = this.handle[eventName];

            if (!list || list.length <= 0) {
              return;
            }

            for (let i = 0; i < list.length; i++) {
              const event = list[i];

              if (event.func === cb && (!target || target === event.target)) {
                list.splice(i, 1);
                break;
              }
            }
          }

          static dispatchEvent(eventName, ...args) {
            const list = this.handle[eventName];

            if (!list || list.length <= 0) {
              return;
            }

            for (let i = 0; i < list.length; i++) {
              const event = list[i];
              event.func.apply(event.target, args);
            }
          }

        }

        _defineProperty(CustomEventListener, "handle", {});

        _BlTools.CustomEventListener = CustomEventListener;

        class StorageUtil extends Component {
          static dumpStorageMap() {
            const data = [];
            this.storageMap.forEach((v, k) => {
              data.push({
                key: k,
                value: v
              });
            });
            console.table(data);
          }

          static clearCache() {
            this.storageMap.clear();
          }

          static read(key, value) {
            let result = value;

            if (this.storageMap.has(key)) {
              return this.storageMap.get(key);
            }

            const userData = JSON.parse(sys.localStorage.getItem(key));

            if (userData !== null) {
              result = userData;
            }

            this.storageMap.set(key, result);
            return result;
          }

          static write(key, value) {
            this.storageMap.set(key, value);
            sys.localStorage.setItem(key, JSON.stringify(value || null));
          }

          static remove(key) {
            this.storageMap.delete(key);
            sys.localStorage.removeItem(key);
          }

          static clear() {
            this.storageMap.clear();
            sys.localStorage.clear();
          }

        }

        _defineProperty(StorageUtil, "storageMap", new Map());

        _BlTools.StorageUtil = StorageUtil;
      })(BlTools || _export("BlTools", BlTools = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvc2hpeXVhbmp1bi9jb2Nvc19jcmVhdG9yXzNkX2Jhc2UvYXNzZXRzL3NjcmlwdC9iYXNlL2JsX3Rvb2xzLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJBdWRpb0NsaXAiLCJyZXNvdXJjZXMiLCJzeXMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJBdWRpb01hbmFnZXIiLCJwbGF5TXVzaWMiLCJuYW1lIiwicGF0aCIsImxvYWQiLCJlcnIiLCJjbGlwIiwiY29uc29sZSIsIndhcm4iLCJzZXRMb29wIiwicGxheSIsInBsYXlTb3VuZCIsInBsYXlPbmVTaG90IiwiQ3VzdG9tRXZlbnRMaXN0ZW5lciIsIm9uIiwiZXZlbnROYW1lIiwiY2IiLCJ0YXJnZXQiLCJoYW5kbGUiLCJkYXRhIiwiZnVuYyIsInB1c2giLCJvZmYiLCJsaXN0IiwibGVuZ3RoIiwiaSIsImV2ZW50Iiwic3BsaWNlIiwiZGlzcGF0Y2hFdmVudCIsImFyZ3MiLCJhcHBseSIsIlN0b3JhZ2VVdGlsIiwiZHVtcFN0b3JhZ2VNYXAiLCJzdG9yYWdlTWFwIiwiZm9yRWFjaCIsInYiLCJrIiwia2V5IiwidmFsdWUiLCJ0YWJsZSIsImNsZWFyQ2FjaGUiLCJjbGVhciIsInJlYWQiLCJyZXN1bHQiLCJoYXMiLCJnZXQiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXQiLCJ3cml0ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmUiLCJkZWxldGUiLCJyZW1vdmVJdGVtIiwiTWFwIiwiQmxUb29scyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT1NBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsRyxPQUFBQSxHOzs7Ozs7O09BQ3REO0FBQUVDLFFBQUFBLE9BQUY7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QUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXbkQsR0FBRyxDQUFDb0QsWUFBSixDQUFpQkMsT0FBakIsQ0FBeUJiLEdBQXpCLENBQVgsQ0FBakI7O0FBQ0EsZ0JBQUlTLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNuQkgsY0FBQUEsTUFBTSxHQUFHRyxRQUFUO0FBQ0g7O0FBQ0QsaUJBQUtiLFVBQUwsQ0FBZ0JrQixHQUFoQixDQUFvQmQsR0FBcEIsRUFBeUJNLE1BQXpCO0FBQ0EsbUJBQU9BLE1BQVA7QUFDSDs7QUFFRCxpQkFBY1MsS0FBZCxDQUF1QmYsR0FBdkIsRUFBb0NDLEtBQXBDLEVBQThDO0FBQzFDLGlCQUFLTCxVQUFMLENBQWdCa0IsR0FBaEIsQ0FBb0JkLEdBQXBCLEVBQXlCQyxLQUF6QjtBQUNBekMsWUFBQUEsR0FBRyxDQUFDb0QsWUFBSixDQUFpQkksT0FBakIsQ0FBeUJoQixHQUF6QixFQUE4QlUsSUFBSSxDQUFDTyxTQUFMLENBQWVoQixLQUFLLElBQUksSUFBeEIsQ0FBOUI7QUFDSDs7QUFFRCxpQkFBY2lCLE1BQWQsQ0FBcUJsQixHQUFyQixFQUFrQztBQUM5QixpQkFBS0osVUFBTCxDQUFnQnVCLE1BQWhCLENBQXVCbkIsR0FBdkI7QUFDQXhDLFlBQUFBLEdBQUcsQ0FBQ29ELFlBQUosQ0FBaUJRLFVBQWpCLENBQTRCcEIsR0FBNUI7QUFDSDs7QUFFRCxpQkFBY0ksS0FBZCxHQUFzQjtBQUNsQixpQkFBS1IsVUFBTCxDQUFnQlEsS0FBaEI7QUFDQTVDLFlBQUFBLEdBQUcsQ0FBQ29ELFlBQUosQ0FBaUJSLEtBQWpCO0FBQ0g7O0FBMUNzQzs7d0JBQTlCVixXLGdCQUV5QyxJQUFJMkIsR0FBSixFOzs7U0EzRXpDQyxPLHVCQUFBQSxPIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQXVkaW9DbGlwLCByZXNvdXJjZXMsIHN5cyB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbmV4cG9ydCBuYW1lc3BhY2UgQmxUb29scyB7XG5cbiAgICBleHBvcnQgY2xhc3MgQXVkaW9NYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgICAgICBwdWJsaWMgc3RhdGljIHBsYXlNdXNpYyhuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBgYXVkaW8vbXVzaWMvJHtuYW1lfWA7XG4gICAgICAgICAgICByZXNvdXJjZXMubG9hZChwYXRoLCBBdWRpb0NsaXAsIChlcnIsIGNsaXApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsaXA/LnNldExvb3AodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2xpcD8ucGxheSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc3RhdGljIHBsYXlTb3VuZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBgYXVkaW8vc291bmQvJHtuYW1lfWA7XG4gICAgICAgICAgICByZXNvdXJjZXMubG9hZChwYXRoLCBBdWRpb0NsaXAsIChlcnIsIGNsaXApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsaXA/LnNldExvb3AoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNsaXA/LnBsYXlPbmVTaG90KDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnRlcmZhY2UgSUV2ZW50RGF0YSB7XG4gICAgICAgIGZ1bmM6IEZ1bmN0aW9uO1xuICAgICAgICB0YXJnZXQ6IGFueTtcbiAgICB9XG4gICAgaW50ZXJmYWNlIElFdmVudCB7XG4gICAgICAgIFtldmVudE5hbWU6IHN0cmluZ106IElFdmVudERhdGFbXTtcbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIEN1c3RvbUV2ZW50TGlzdGVuZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBwdWJsaWMgc3RhdGljIGhhbmRsZTogSUV2ZW50ID0ge307XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyBvbihldmVudE5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYW5kbGVbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IElFdmVudERhdGEgPSB7IGZ1bmM6IGNiLCB0YXJnZXQgfTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlW2V2ZW50TmFtZV0ucHVzaChkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgb2ZmKGV2ZW50TmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIHRhcmdldD86IGFueSkge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaGFuZGxlW2V2ZW50TmFtZV07XG4gICAgICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbGlzdFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZnVuYyA9PT0gY2IgJiYgKCF0YXJnZXQgfHwgdGFyZ2V0ID09PSBldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc3RhdGljIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IGFueSkge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaGFuZGxlW2V2ZW50TmFtZV07XG4gICAgICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbGlzdFtpXTtcbiAgICAgICAgICAgICAgICBldmVudC5mdW5jLmFwcGx5KGV2ZW50LnRhcmdldCwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU3RvcmFnZVV0aWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHN0b3JhZ2VNYXA6IE1hcDxzdHJpbmcsIHVua25vd24+ID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZHVtcFN0b3JhZ2VNYXAoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gW10gYXMgYW55O1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlTWFwLmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goeyBrZXk6IGssIHZhbHVlOiB2IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyBjbGVhckNhY2hlKCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlTWFwLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWQ8VD4oa2V5OiBzdHJpbmcsIHZhbHVlPzogVCk6IFQge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmFnZU1hcC5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VNYXAuZ2V0KGtleSkgYXMgVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShzeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgICAgICAgICBpZiAodXNlckRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB1c2VyRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1hcC5zZXQoa2V5LCByZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCBhcyBUO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyB3cml0ZTxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSB8fCBudWxsKSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlTWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc3RhdGljIGNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlTWFwLmNsZWFyKCk7XG4gICAgICAgICAgICBzeXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19